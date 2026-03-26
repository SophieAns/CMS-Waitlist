// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
// import ScrollReveal from "./ScrollReveal";

// const faqs = [
//   { q: "What is SpitalLabs?", a: "SpitalLabs is a comprehensive cooperative management platform that simplifies member management, financial tracking, and communication for cooperatives of all sizes." },
//   { q: "How does the waitlist work?", a: "Simply sign up with your email and you'll be added to our early access list. We'll notify you as soon as we're ready to onboard new cooperatives." },
//   { q: "Is there a free trial?", a: "Yes! All waitlist members receive an extended free trial when we launch, giving you plenty of time to explore the platform." },
//   { q: "Can I invite my team?", a: "Absolutely. Once onboarded, you can invite unlimited team members to collaborate on your cooperative's management." },
//   { q: "What payment methods are accepted?", a: "We accept all major credit cards, mobile money, and bank transfers to make it easy for cooperatives everywhere." },
// ];

const FAQSection = () => (
  <section className="py-20 px-6">
    <div className="container mx-auto max-w-2xl">
      {/* <ScrollReveal className="text-center mb-12"> */}
        <p className="text-primary font-semibold text-sm mb-2">FAQ</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground text-sm">
          Choose a pricing plan that fits your cooperative's needs. Our affordable options ensure you get the most value as your organization grows.
        </p>
      {/* </ScrollReveal> */}
      {/* <ScrollReveal> */}
        {/* <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-5">
              <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollReveal> */}
    </div>
  </section>
);

export default FAQSection;
