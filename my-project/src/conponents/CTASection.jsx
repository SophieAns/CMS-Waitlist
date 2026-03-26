// import ScrollReveal from "./ScrollReveal";

const CTASection = () => (
  <section id="waitlist" className="py-20 px-6">
    {/* <ScrollReveal> */}
      <div className="container mx-auto bg-primary rounded-3xl py-16 px-8 text-center">
        <p className="text-primary-foreground/70 font-semibold text-sm mb-3 uppercase tracking-wide">
          Ready to elevate your business?
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-8 max-w-lg mx-auto leading-tight">
          Reach Out Today for Your Free Consultation!
        </h2>
        <a
          href="#"
          className="inline-block bg-surface-dark text-surface-dark-foreground px-8 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity active:scale-[0.97]"
        >
          Connect with us
        </a>
      </div>
    {/* </ScrollReveal> */}
  </section>
);

export default CTASection;
