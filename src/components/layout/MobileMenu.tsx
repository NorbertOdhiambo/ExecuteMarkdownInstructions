import { useEffect } from "react";
import { Link } from "react-router";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  navLinks: { label: string; to: string }[];
  isActive: (to: string) => boolean;
}

export default function MobileMenu({ open, onClose, navLinks, isActive }: MobileMenuProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-[60] transition-all duration-300 ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`absolute right-0 top-0 bottom-0 w-full max-w-sm bg-[#111111] flex flex-col transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#A82626] rounded flex items-center justify-center">
              <span className="text-white font-serif font-bold text-xs">H</span>
            </div>
            <div className="text-white">
              <div className="font-serif font-semibold text-sm">HOFPAN</div>
              <div className="font-sans text-xs tracking-widest uppercase opacity-60">The Lord Is Here</div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors p-1"
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 4l12 12M16 4L4 16" />
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 overflow-y-auto px-6 py-6" aria-label="Mobile navigation">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`block py-3 font-sans text-sm uppercase tracking-widest border-b border-white/5 transition-colors ${
                    isActive(link.to) ? "text-[#A82626]" : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
            <Link
              to="/plan-visit"
              className="block w-full text-center px-6 py-3.5 bg-[#A82626] text-white text-xs font-medium font-sans uppercase tracking-widest rounded hover:bg-[#8a1f1f] transition-colors"
            >
              Plan a Visit
            </Link>
            <Link
              to="/give"
              className="block w-full text-center px-6 py-3.5 bg-transparent text-white text-xs font-medium font-sans uppercase tracking-widest rounded border border-white/30 hover:border-white transition-colors"
            >
              Give
            </Link>
          </div>
        </nav>

        {/* Contact Info */}
        <div className="px-6 py-6 border-t border-white/10">
          <p className="text-white/40 text-xs uppercase tracking-widest mb-3 font-sans">Contact</p>
          <a href="tel:+254729870123" className="block text-white/70 text-sm font-sans hover:text-white transition-colors mb-1">
            +254 729 870 123
          </a>
          <a href="mailto:kkarisa810@gmail.com" className="block text-white/70 text-sm font-sans hover:text-white transition-colors">
            kkarisa810@gmail.com
          </a>
          <p className="text-white/40 text-xs font-sans mt-3">Mtwapa, Mombasa, Kenya</p>
        </div>
      </div>
    </div>
  );
}
