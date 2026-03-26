import { useState } from "react";
import heroImg from "../assets/Objects.png";

const HeroSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      success("You're on the list! We'll be in touch soon.");
      setEmail("");
    }
  };

  return (
    <section className="pt-32 pb-0 px-6 overflow-hidden">
      <div className="container mx-auto flex items-center justify-between py-15 px-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.08] font-bold text-foreground mb-6">
            Be the First to Experience the Future of Cooperative Management!
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-md">
            Join our exclusive waitlist to get early access and special benefits.
          </p>
          <form onSubmit={handleSubmit} className="flex max-w-md border border-border rounded-full overflow-hidden bg-background shadow-sm">
            <button
              type="submit"
              className="bg-[#141414] px-5 py-2.5 rounded-full font-size:16px text-white font-bold hover:opacity-90"
            >Join the waitlist</button>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 text-sm bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
          </form>
        </div>
        <div className="flex justify-end -mt-16 md:-mt-32">
          <img src={heroImg} alt="Team collaborating on cooperative management" className="w-full max-w-md lg:max-w-lg" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
