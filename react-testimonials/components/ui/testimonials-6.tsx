import * as React from "react";
import { cn } from "@/lib/utils";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Testimonial = {
  quote: string;
  image: string;
  name: string;
  role: string;
  company?: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Finvera's small business loan program gave us the flexible capital we needed to scale our inventory before peak season. The interest rates were transparent and the repayment terms fit our cash flow. They are a true partner for retail entrepreneurs.",
    image: "images/user_tony.png",
    name: "Tony Cruz",
    role: "Small Business Owner",
    company: "Cruz Retail",
  },
  {
    quote:
      "I was always intimidated by investing until I found Finvera Wealth. Their automated robo-advisor custom-built a diversified portfolio tailored to my budget and risk tolerance. It's rewarding to see my savings grow hands-free.",
    image: "images/user_sarah.png",
    name: "Sarah Thompson",
    role: "Career Changer",
  },
  {
    quote:
      "The zero-commission trading on Finvera Trade is perfect for building a portfolio early in my career. The interface is clean, execution is instant, and the real-time market insights have helped me make smarter investment choices.",
    image: "images/user_michael.png",
    name: "Michael Chen",
    role: "Recent Graduate",
  },
  {
    quote:
      "As a freelancer, my monthly income is highly unpredictable. Finvera's smart automated savings tool automatically sweeps small percentages of client deposits into a high-yield investment account. It has taken the stress out of saving for taxes.",
    image: "images/user_david.png",
    name: "David Rodriguez",
    role: "Freelance Designer",
  },
  {
    quote:
      "I love how Finvera makes complex financial concepts simple. The educational content is top-notch, and the community forum is incredibly supportive. It feels like having a financial advisor in your pocket.",
    image: "images/user_emily.png",
    name: "Emily Washington",
    role: "Teacher",
  },
  {
    quote:
      "After retiring, I needed my savings to work harder for me. Finvera's personalized asset management and fixed-income portfolios gave me steady, reliable returns with complete security. The onboarding process was simple and very clear.",
    image: "images/user_james.png",
    name: "James Kim",
    role: "Retired Veteran",
  },
  {
    quote:
      "The real-time ledger tracking and API-driven automation on Finvera are phenomenal. Their platform isn't just a beautiful UI—it's backed by robust, low-latency infrastructure. I've consolidated all my recurring stock purchases here.",
    image: "../assets/testim_oluwaseun.jpg",
    name: "Oluwaseun Adebayo",
    role: "Software Engineer",
  },
  {
    quote:
      "Finvera Trade has completely transformed how we manage cross-border payments and hedge currency risk. The borderless accounts and low exchange rates have saved our exporting business thousands in transaction fees this quarter.",
    image: "../assets/testim_chiamaka.jpg",
    name: "Chiamaka Nwachukwu",
    role: "Agricultural Exporter",
  },
  {
    quote:
      "Managing business credit, cash reserves, and long-term investments in one single dashboard is exactly what modern e-commerce founders need. Finvera's instant cash-back program on operational spend keeps our margins strong.",
    image: "../assets/testim_marcus.jpg",
    name: "Marcus Vance",
    role: "E-commerce Entrepreneur",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function TestimonialsSection() {
  return (
    <section className="relative py-10">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto flex max-w-sm flex-col items-center justify-center gap-4">
          <div className="flex justify-center">
            <div className="rounded-lg border px-4 py-1">Testimonials</div>
          </div>

          <h2 className="font-bold text-3xl tracking-tighter lg:text-4xl">
            What our users say
          </h2>
          <p className="text-center text-muted-foreground text-sm">
            See what our customers have to say about us.
          </p>
        </div>

        <div
          className={cn(
            "mt-10 flex max-h-[40rem] justify-center gap-6 overflow-hidden",
            "mask-[linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]",
          )}
        >
          <InfiniteSlider direction="vertical" speed={30} speedOnHover={15}>
            {firstColumn.map((testimonial) => (
              <TestimonialsCard
                key={testimonial.name}
                testimonial={testimonial}
              />
            ))}
          </InfiniteSlider>
          <InfiniteSlider
            className="hidden md:block"
            direction="vertical"
            speed={50}
            speedOnHover={25}
          >
            {secondColumn.map((testimonial) => (
              <TestimonialsCard
                key={testimonial.name}
                testimonial={testimonial}
              />
            ))}
          </InfiniteSlider>
          <InfiniteSlider
            className="hidden lg:block"
            direction="vertical"
            speed={35}
            speedOnHover={17}
          >
            {thirdColumn.map((testimonial) => (
              <TestimonialsCard
                key={testimonial.name}
                testimonial={testimonial}
              />
            ))}
          </InfiniteSlider>
        </div>
      </div>
    </section>
  );
}

function TestimonialsCard({
  testimonial,
  className,
  ...props
}: React.ComponentProps<"figure"> & {
  testimonial: Testimonial;
}) {
  const { quote, image, name, role, company } = testimonial;
  return (
    <figure
      className={cn(
        "w-full max-w-xs rounded-3xl border bg-card p-8 shadow-foreground/10 shadow-lg dark:bg-card/20",
        className,
      )}
      {...props}
    >
      <blockquote>{quote}</blockquote>
      <figcaption className="mt-5 flex items-center gap-2">
        <Avatar className="size-8 rounded-full">
          <AvatarImage alt={`${name}'s profile picture`} src={image} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <cite className="font-medium not-italic leading-5 tracking-tight">
            {name}
          </cite>
          <span className="text-muted-foreground text-sm leading-5 tracking-tight">
            {role} {company && `, ${company}`}
          </span>
        </div>
      </figcaption>
    </figure>
  );
}

export default TestimonialsSection;
