
import Navimg from "../assets/SpitalLabsLogo.png";

const Navbar = () => (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-md border-border gap-2.5">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
            <div className="">
                <img src={Navimg} alt="SpitalLabs logo" />
            </div>
            <div className="flex items-center gap-2 text-foreground font-bold text-xl">
                {/* SpitalLabs <Sparkles className="w-5 h-5 text-primary" /> */}
            </div>
            <a
                href="#waitlist"
                className="bg-[#141414] px-5 py-2.5 rounded-full font-size:16px text-white font-bold hover:opacity-90"
            >
                Join the waitlist
            </a>
        </div>
    </nav>
);

export default Navbar;