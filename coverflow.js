class CoverflowCarousel {
  constructor(containerElement, options = {}) {
    this.container = containerElement;
    this.frame = this.container.querySelector('.cf-frame');
    this.ring = this.container.querySelector('.cf-ring');
    this.cards = Array.from(this.ring.querySelectorAll('.cf-card'));
    this.captionTitle = this.container.querySelector('.cf-caption-title');
    this.captionSubtitle = this.container.querySelector('.cf-caption-subtitle');
    this.captionMeta = this.container.querySelector('.cf-caption-meta');
    
    this.count = this.cards.length;
    if (this.count === 0) return;

    this.options = {
      rotate: options.rotate !== undefined ? options.rotate : 44,
      depth: options.depth !== undefined ? options.depth : 0.6,
      perspective: options.perspective !== undefined ? options.perspective : 3,
      falloff: options.falloff !== undefined ? options.falloff : 0.56,
      fade: options.fade !== undefined ? options.fade : 0.1,
      gap: options.gap !== undefined ? options.gap : 0.05,
      loop: options.loop !== undefined ? options.loop : true,
    };

    // State
    this.pos = 0;
    this.target = 0;
    this.width = 0;
    this.raf = null;
    this.drag = null;
    this.selected = 0;

    this.init();
  }

  init() {
    this.frame.style.perspective = `calc(var(--cf-card) * ${this.options.perspective})`;
    
    // Bind methods
    this.paint = this.paint.bind(this);
    this.step = this.step.bind(this);
    this.onPointerDown = this.onPointerDown.bind(this);
    this.onPointerMove = this.onPointerMove.bind(this);
    this.endDrag = this.endDrag.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    
    // Events
    this.frame.addEventListener('pointerdown', this.onPointerDown);
    this.frame.addEventListener('pointermove', this.onPointerMove);
    this.frame.addEventListener('pointerup', this.endDrag);
    this.frame.addEventListener('pointercancel', this.endDrag);
    this.frame.addEventListener('keydown', this.onKeyDown);
    
    // Resize Observer
    this.resizeObserver = new ResizeObserver(() => {
      if (this.cards[0]) {
        this.width = this.cards[0].offsetWidth;
        this.paint();
      }
    });
    this.resizeObserver.observe(this.frame);
    
    // Buttons
    const prevBtn = this.container.querySelector('.cf-prev');
    const nextBtn = this.container.querySelector('.cf-next');
    if (prevBtn) prevBtn.addEventListener('click', () => this.nudge(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => this.nudge(1));

    // Pagination
    this.paginationDots = Array.from(this.container.querySelectorAll('.cf-dot'));
    this.paginationDots.forEach((dot, index) => {
      dot.addEventListener('click', () => this.goTo(index));
    });
    
    // Initial paint
    setTimeout(() => {
      if (this.cards[0]) {
        this.width = this.cards[0].offsetWidth;
        this.paint();
        this.updateCaption();
      }
    }, 50);
  }

  indexAt(pos) {
    return ((Math.round(pos) % this.count) + this.count) % this.count;
  }

  clamp(pos) {
    return this.options.loop ? pos : Math.max(0, Math.min(this.count - 1, pos));
  }

  paint() {
    const width = this.width;
    if (!width) return;
    const pitch = width * (1 + this.options.gap);
    const pos = this.pos;

    this.cards.forEach((card, index) => {
      let offset = index - pos;
      if (this.options.loop) {
        offset = ((offset % this.count) + this.count) % this.count;
        if (offset > this.count / 2) offset -= this.count;
      }

      const distance = Math.abs(offset);
      const ramp = Math.pow(distance, this.options.falloff);
      const tilt = Math.min(this.options.rotate * ramp, 82) * Math.sign(offset);

      card.style.transform = `translateX(calc(-50% + ${offset * pitch}px)) translateZ(${-this.options.depth * width * ramp}px) rotateY(${-tilt}deg)`;

      const edge = this.options.loop ? Math.min(1, Math.max(0, this.count / 2 - distance)) : 1;
      card.style.opacity = String(Math.max(0, 1 - this.options.fade * distance) * edge);
      card.style.zIndex = String(100 - Math.round(distance));
    });
  }

  step() {
    const remaining = this.target - this.pos;
    if (Math.abs(remaining) < 0.0004) {
      this.pos = this.target;
      this.paint();
      this.raf = null;
      return;
    }
    this.pos += remaining * 0.16;
    this.paint();
    this.raf = requestAnimationFrame(this.step);
  }

  settle(target) {
    if (this.raf !== null) cancelAnimationFrame(this.raf);
    this.target = target;
    const newSelected = this.indexAt(target);
    if (this.selected !== newSelected) {
      this.selected = newSelected;
      this.updateCaption();
      this.updatePagination();
    }
    this.raf = requestAnimationFrame(this.step);
  }

  goTo(index) {
    const target = this.options.loop
      ? index + Math.round((this.target - index) / this.count) * this.count
      : index;
    this.settle(this.clamp(target));
  }

  nudge(by) {
    this.settle(this.clamp(Math.round(this.target) + by));
  }

  onPointerDown(e) {
    if (this.raf !== null) {
      cancelAnimationFrame(this.raf);
      this.raf = null;
    }
    e.currentTarget.setPointerCapture(e.pointerId);
    this.target = this.pos;
    this.drag = {
      id: e.pointerId,
      x: e.clientX,
      pos: this.pos,
      v: 0,
      t: performance.now(),
    };
  }

  onPointerMove(e) {
    if (!this.drag || this.drag.id !== e.pointerId) return;

    const pitch = this.width * (1 + this.options.gap);
    if (!pitch) return;

    const now = performance.now();
    const previous = this.pos;
    this.pos = this.clamp(this.drag.pos - (e.clientX - this.drag.x) / pitch);
    this.drag.v = ((this.pos - previous) / Math.max(now - this.drag.t, 1)) * 1000;
    this.drag.t = now;

    const index = this.indexAt(this.pos);
    if (index !== this.selected) {
      this.selected = index;
      this.updateCaption();
      this.updatePagination();
    }
    this.paint();
  }

  endDrag(e) {
    if (!this.drag || this.drag.id !== e.pointerId) return;
    const carried = Math.max(-2, Math.min(2, this.drag.v * 0.18));
    this.drag = null;
    this.settle(this.clamp(Math.round(this.pos + carried)));
  }

  onKeyDown(e) {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      this.nudge(-1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      this.nudge(1);
    }
  }

  updateCaption() {
    const activeCard = this.cards[this.selected];
    if (!activeCard) return;
    
    if (this.captionTitle) {
      this.captionTitle.textContent = activeCard.dataset.title || '';
    }
    if (this.captionSubtitle) {
      this.captionSubtitle.textContent = activeCard.dataset.subtitle || '';
    }
    
    if (this.captionMeta) {
      this.captionMeta.innerHTML = '';
      try {
        const metaData = JSON.parse(activeCard.dataset.meta || '[]');
        metaData.forEach(row => {
          const div = document.createElement('div');
          div.className = 'cf-meta-row';
          const dt = document.createElement('dt');
          dt.textContent = row.label;
          const dd = document.createElement('dd');
          dd.textContent = row.value;
          div.appendChild(dt);
          div.appendChild(dd);
          this.captionMeta.appendChild(div);
        });
      } catch (err) {}
    }
  }

  updatePagination() {
    this.paginationDots.forEach((dot, index) => {
      if (index === this.selected) {
        dot.classList.add('active');
        dot.setAttribute('aria-current', 'true');
      } else {
        dot.classList.remove('active');
        dot.removeAttribute('aria-current');
      }
    });
  }
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('.cf-container');
  containers.forEach(container => {
    new CoverflowCarousel(container);
  });
});
