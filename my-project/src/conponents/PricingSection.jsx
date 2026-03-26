import React from "react";
// import { Check, ChevronRight } from "lucide-react";
// import ScrollReveal from "./ScrollReveal";

const plans = [
  {
    name: "Basic Plan",
    price: "$30.14",
    desc: "Learn more about this plan that fits your cooperative's needs, from basic tools features. Your organization grows.",
    features: ["Sanefity", "Sanefity", "Sanefity", "Sanefity", "Sanefity"],
    highlighted: false,
  },
  {
    name: "Standard Plan",
    price: "$30.14",
    desc: "Learn more about this plan that fits your cooperative's needs, from basic tools features. Your organization grows.",
    features: ["Sanefity", "Sanefity", "Sanefity", "Sanefity", "Sanefity"],
    highlighted: true,
  },
  {
    name: "Premium Plan",
    price: "$30.14",
    desc: "Learn more about this plan that fits your cooperative's needs, from basic tools features. Your organization grows.",
    features: ["Sanefity", "Sanefity", "Sanefity", "Sanefity", "Sanefity"],
    highlighted: false,
  },
];

const PricingSection = () => (
  <section className="py-20 px-6">
    <div className="container mx-auto text-center">
      {/* <ScrollReveal> */}
        <p className="text-primary font-semibold text-sm mb-2">Pricing</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Flexible Plans for Every Cooperative
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-6">
          Choose a pricing plan that fits your cooperative's needs, from basic tools to features. Our affordable options ensure you get the most value as your organization grows.
        </p>
        <div className="inline-flex bg-muted rounded-full p-1 mb-12">
          <button className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold transition-colors">
            Monthly
          </button>
          <button className="text-muted-foreground px-5 py-2 rounded-full text-sm font-semibold hover:text-foreground transition-colors">
            Yearly
          </button>
        </div>
      {/* </ScrollReveal> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* {plans.map((plan, i) => ( */}
        {/* //   <ScrollReveal key={i} delay={i * 100}> */}
            {/* <div
              className={`rounded-2xl p-8 text-left border ${
                plan.highlighted
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-foreground border-border"
              }`}
            >
              <p className={`text-sm font-medium mb-4 ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {plan.name}
              </p>
              <div className="mb-3">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className={`text-sm ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}> /month</span>
              </div>
              <p className={`text-sm mb-6 leading-relaxed ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {plan.desc}
              </p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#waitlist"
                className={`inline-flex items-center gap-1 py-2.5 px-5 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90 active:scale-[0.97] ${
                  plan.highlighted ? "bg-surface-dark text-surface-dark-foreground" : "bg-primary text-primary-foreground"
                }`}
              >
                Choose package <ChevronRight className="w-4 h-4" />
              </a>
            </div> */}
        {/* //   </ScrollReveal> */}
        {/* // ))} */}
      </div>
    </div>
  </section>
);

export default PricingSection;
