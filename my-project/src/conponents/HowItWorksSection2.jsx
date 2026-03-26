import React from "react";
// import ScrollReveal from "./ScrollReveal";

// const coopSteps = [
//   { num: "1", title: "Sign Up", desc: "Create your account in minutes" },
//   { num: "2", title: "Set Up Your Cooperative", desc: "Add members, setup financial, and customize features" },
//   { num: "3", title: "Manage and Grow", desc: "Unlock tools to streamline operations and grow your cooperative" },
// ];

const HowItWorksSection2 = () => (
  <section className="py-20 px-6 bg-primary">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">
        {/* <ScrollReveal> */}
          <p className="text-primary-foreground/70 font-semibold text-sm mb-2">How it Works</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">How it Works</h2>
          <p className="text-primary-foreground/70 mb-6">
            Getting your cooperative set up is easy — create your account, configure your cooperative, and start managing seamlessly.
          </p>
          <a
            href="#waitlist"
            className="inline-block bg-primary-foreground text-primary px-6 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity active:scale-[0.97]"
          >
            See How It Works
          </a>
        {/* </ScrollReveal> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* {coopSteps.map((s, i) => ( */}
            {/* <ScrollReveal key={i} delay={i * 100}> */}
              <div className="bg-white text-foreground rounded-2xl p-8 shadow-sm border border-border/40">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-muted text-muted-foreground font-bold mb-5">
                  {/* {s.num} */}
                </span>
                {/* <h3 className="text-xl font-bold mb-2">{s.title}</h3> */}
                {/* <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p> */}
              </div>
            {/* </ScrollReveal> */}
          {/* ))} */}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection2;
