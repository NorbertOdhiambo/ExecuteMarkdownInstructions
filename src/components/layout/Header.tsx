import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Sermons", to: "/sermons" },
  { label: "Ministries", to: "/ministries" },
  { label: "Events", to: "/events" },
  { label: "Leadership", to: "/leadership" },
  { label: "Prayer", to: "/prayer" },
  { label: "Give", to: "/give" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || !isHome
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0" aria-label="HOFPAN — Home">
              <div className="w-10 h-10 bg-[#A82626] rounded flex items-center justify-center flex-shrink-0">
                <span className="text-white font-serif font-bold text-sm leading-none">H</span>
              </div>
              <div className={`transition-colors duration-300 ${scrolled || !isHome ? "text-[#111111]" : "text-white"}`}>
                <div className="font-serif font-semibold text-sm leading-tight tracking-wide">HOFPAN</div>
                <div className="font-sans text-xs tracking-widest uppercase opacity-70 hidden sm:block">The Lord Is Here</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Primary navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 text-xs font-medium font-sans uppercase tracking-widest transition-colors duration-200 rounded ${
                    isActive(link.to)
                      ? "text-[#A82626]"
                      : scrolled || !isHome
                      ? "text-[#111111] hover:text-[#A82626]"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <Link
                to="/plan-visit"
                className="hidden sm:inline-flex items-center px-5 py-2.5 bg-[#A82626] text-white text-xs font-medium font-sans uppercase tracking-widest rounded hover:bg-[#8a1f1f] transition-colors duration-200"
              >
                Plan a Visit
              </Link>

              <button
                onClick={() => setMobileOpen(true)}
                className={`lg:hidden flex flex-col gap-1.5 p-2 rounded transition-colors ${
                  scrolled || !isHome ? "text-[#111111]" : "text-white"
                }`}
                aria-label="Open menu"
                aria-expanded={mobileOpen}
              >
                <span className="block w-5 h-0.5 bg-current" />
                <span className="block w-5 h-0.5 bg-current" />
                <span className="block w-4 h-0.5 bg-current" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} navLinks={navLinks} isActive={isActive} />
    </>
  );
}
