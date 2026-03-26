// import { Sparkles } from "lucide-react";

const quickLinks1 = ["About us", "Services", "Projects", "Careers"];
const quickLinks1b = ["Company News", "Services", "Contact us"];
const quickLinks2 = ["About us", "Services", "Projects", "Careers"];
const quickLinks2b = ["Company News", "Services", "Contact us"];

const Footer = () => (
  <footer className="bg-surface-dark text-surface-dark-foreground py-16 px-6">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-10">
      <div>
        <div className="flex items-center gap-2 font-bold text-lg mb-4">
          {/* SpitalLabs <Sparkles className="w-4 h-4" /> */}
        </div>
      </div>
      <div>
        <h4 className="font-semibold mb-4 text-sm">Quick Links</h4>
        <ul className="space-y-2">
          {/* {quickLinks1.map((item) => ( */}
            {/* // <li key={item}>
            //   <a href="#" className="text-surface-dark-foreground/60 text-sm hover:text-surface-dark-foreground transition-colors">{item}</a>
            // </li> */}
        {/* //   ))} */}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-4 text-sm">&nbsp;</h4>
        <ul className="space-y-2">
          {/* {quickLinks1b.map((item) => ( */}
            {/* <li key={item}>
              <a href="#" className="text-surface-dark-foreground/60 text-sm hover:text-surface-dark-foreground transition-colors">{item}</a>
            </li> */}
          {/* ))} */}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-4 text-sm">Quick Links</h4>
        <ul className="space-y-2">
          {/* {quickLinks2.map((item) => ( */}
            {/* <li key={item}>
              <a href="#" className="text-surface-dark-foreground/60 text-sm hover:text-surface-dark-foreground transition-colors">{item}</a>
            </li> */}
          {/* ))} */}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-4 text-sm">&nbsp;</h4>
        <ul className="space-y-2">
          {/* {quickLinks2b.map((item) => ( */}
            {/* <li key={item}>
              <a href="#" className="text-surface-dark-foreground/60 text-sm hover:text-surface-dark-foreground transition-colors">{item}</a>
            </li> */}
          {/* ))} */}
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
