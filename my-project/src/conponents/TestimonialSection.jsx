import React from "react";
// import ScrollReveal from "./ScrollReveal";

// const testimonials = [
//   { name: "Amara Osei", role: "COO, Co-working", text: "I hear how many teams have empowered cooperatives to streamline their operations, and for our goals, we love the system that gave users to our community." },
//   { name: "Daniel Mensah", role: "COO, Co-working", text: "Hear how many teams have empowered cooperatives to streamline their collaboration, and for our goals, we love the system that connects our members seamlessly." },
//   { name: "Fatima Bello", role: "COO, Co-working", text: "Their platform empowered cooperatives to streamline their operations, and for our goals, it has become an essential tool for our entire organization." },
//   { name: "Kwame Asante", role: "COO, Co-working", text: "An interesting platform transforming cooperative management — perfect into our collaboration, driving our goals forward every single day." },
//   { name: "Grace Addo", role: "COO, Co-working", text: "They interestingly built a platform transforming how we streamline our goals, and we love the system that keeps our members connected." },
//   { name: "Emeka Nwosu", role: "COO, Co-working", text: "Among the many software options compressing cooperative management, this platform stands out for enhancing our collaboration and growth." },
// ];

const TestimonialsSection = () => (
  <section className="py-20 px-6">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 mb-12 items-end">
        {/* <ScrollReveal> */}
          <p className="text-primary font-semibold text-sm mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-wrap-balance">
            Hear from Our Satisfied Cooperatives
          </h2>
        {/* </ScrollReveal> */}
        {/* <ScrollReveal delay={100}> */}
          <p className="text-muted-foreground leading-relaxed">
            Hear how our platform has empowered cooperatives to streamline their operations, enhance collaboration, and achieve their goals. See what our users have to say!
          </p>
        {/* </ScrollReveal> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* {testimonials.map((t, i) => ( */}
        {/* //   <ScrollReveal key={i} delay={i * 70}> */}
            <div className="border border-border rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                  {/* {t.name.split(" ").map(n => n[0]).join("")} */}
                </div>
                <div>
                  {/* <p className="font-semibold text-sm text-foreground">{t.name}</p> */}
                  {/* <p className="text-xs text-muted-foreground">{t.role}</p> */}
                </div>
              </div>
              {/* <p className="text-muted-foreground text-sm leading-relaxed">{t.text}</p> */}
            </div>
        {/* //   </ScrollReveal> */}
        {/* ))} */}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
