import React from "react";

// import { Rocket, Gift, MessageSquare, HeadphonesIcon, ArrowRight } from "lucide-react";
// import ScrollReveal from "./ScrollReveal";

// const benefits = [
//   { icon: Rocket, title: "Early access before public launch" },
//   { icon: Gift, title: "Exclusive offers or discounts for early adopters" },
//   { icon: MessageSquare, title: "Influence product features through feedback" },
//   { icon: HeadphonesIcon, title: "Priority support for waitlist members" },
// ];

const BenefitSection = () => (
  <section className="py-20 px-6">
    <div className="container mx-auto text-center">
      {/* <ScrollReveal> */}
        <p className="text-primary font-semibold text-sm mb-2">Benefits</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Why Join the Waitlist?
        </h2>
      {/* </ScrollReveal> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
          {/* <ScrollReveal key={i} delay={i * 80}> */}
            <div className="bg-surface-gray rounded-2xl p-8 flex flex-col items-start text-left group hover:shadow-lg transition-shadow relative overflow-hidden">
              <div className="bg-surface-gray rounded-xl p-4 mb-6 border border-border/50">
                {/* <b.icon className="w-7 h-7 text-foreground" strokeWidth={1.5} /> */}
              </div>
              {/* <p className="text-foreground font-medium leading-snug">{b.title}</p> */}
              <div className="absolute bottom-4 left-4 bg-primary rounded-full p-2 group-hover:bg-primary/80 transition-colors">
                {/* <ArrowRight className="w-4 h-4 text-primary-foreground" /> */}
              </div>
            </div>
          {/* </ScrollReveal> */}
      
      </div>
    </div>
  </section>
);

export default BenefitSection;
