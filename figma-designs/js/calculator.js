document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('calcSlider');
  const amountDisplay = document.getElementById('calcAmountDisplay');
  const tabLoan = document.getElementById('tabLoan');
  const tabYield = document.getElementById('tabYield');
  
  // Result DOM Elements
  const box1Label = document.getElementById('box1Label');
  const box1Value = document.getElementById('box1Value');
  const box2Label = document.getElementById('box2Label');
  const box2Value = document.getElementById('box2Value');
  const calcCta = document.getElementById('calcCta');

  // State
  let mode = 'loan'; // 'loan' or 'yield'
  
  // Format currency helper
  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(val);
  };

  const updateCalculator = () => {
    const amount = parseInt(slider.value, 10);
    amountDisplay.textContent = formatCurrency(amount);

    // Update progress bar color
    const progress = ((amount - slider.min) / (slider.max - slider.min)) * 100;
    slider.style.background = `linear-gradient(to right, var(--color-primary) ${progress}%, hsl(214, 32%, 91%) ${progress}%)`;

    if (mode === 'loan') {
      // Logic: 8% flat interest over 12 months
      const totalRepayment = amount * 1.08;
      const monthlyPayment = totalRepayment / 12;
      
      box1Label.textContent = 'Est. Monthly Payment';
      box1Value.textContent = formatCurrency(monthlyPayment);
      
      box2Label.textContent = 'Total Repayment (12mo)';
      box2Value.textContent = formatCurrency(totalRepayment);
      
      calcCta.textContent = 'Apply for Business Loan';
    } else {
      // Logic: 12% APY Yield over 1 year
      const totalReturn = amount * 0.12;
      const totalBalance = amount * 1.12;
      
      box1Label.textContent = 'Est. 1-Year Return';
      box1Value.textContent = '+' + formatCurrency(totalReturn);
      box1Value.style.color = 'var(--color-success)';
      
      box2Label.textContent = 'Total Balance';
      box2Value.textContent = formatCurrency(totalBalance);
      
      calcCta.textContent = 'Start Investing Now';
    }
    
    // Reset color if switching back from yield
    if (mode === 'loan') {
      box1Value.style.color = 'var(--color-text-dark)';
    }
  };

  // Event Listeners
  slider.addEventListener('input', updateCalculator);

  tabLoan.addEventListener('click', () => {
    mode = 'loan';
    tabLoan.classList.add('active');
    tabYield.classList.remove('active');
    updateCalculator();
  });

  tabYield.addEventListener('click', () => {
    mode = 'yield';
    tabYield.classList.add('active');
    tabLoan.classList.remove('active');
    updateCalculator();
  });

  // Initial render
  updateCalculator();
});
