import { Link } from "react-router";

const explore = [
  { label: "About", to: "/about" },
  { label: "Sermons", to: "/sermons" },
  { label: "Ministries", to: "/ministries" },
  { label: "Events", to: "/events" },
  { label: "Leadership", to: "/leadership" },
];

const connect = [
  { label: "Prayer Request", to: "/prayer" },
  { label: "Give", to: "/give" },
  { label: "Contact", to: "/contact" },
  { label: "Plan a Visit", to: "/plan-visit" },
];

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#A82626] rounded flex items-center justify-center flex-shrink-0">
                <span className="text-white font-serif font-bold text-sm">H</span>
              </div>
              <div>
                <div className="font-serif font-semibold text-sm">HOFPAN</div>
                <div className="text-xs tracking-widest uppercase opacity-60 font-sans">The Lord Is Here</div>
              </div>
            </div>
            <p className="text-white/60 text-sm font-sans leading-relaxed mb-6">
              House of Prayer for All Nations.<br />
              A place where every person can encounter God, find community, grow in faith, and know that The Lord Is Here.
            </p>
            <p className="text-[#A82626] text-xs font-sans uppercase tracking-widest font-medium">
              All Flesh to See the Salvation of the Lord
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xs font-sans font-medium uppercase tracking-widest text-white/40 mb-5">Explore</h3>
            <ul className="space-y-3">
              {explore.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/70 text-sm font-sans hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xs font-sans font-medium uppercase tracking-widest text-white/40 mb-5">Connect</h3>
            <ul className="space-y-3">
              {connect.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/70 text-sm font-sans hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h3 className="text-xs font-sans font-medium uppercase tracking-widest text-white/40 mb-5">Visit</h3>
            <div className="space-y-3 text-sm font-sans text-white/70">
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Address</p>
                <p>Mtwapa, Mombasa</p>
                <p className="text-white/40 text-xs mt-0.5">[Full address to be confirmed]</p>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Phone</p>
                <a href="tel:+254729870123" className="hover:text-white transition-colors">+254 729 870 123</a>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Email</p>
                <a href="mailto:kkarisa810@gmail.com" className="hover:text-white transition-colors break-all">
                  kkarisa810@gmail.com
                </a>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Sunday Worship</p>
                <p>[Service time to be confirmed]</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-sans">
            © {new Date().getFullYear()} House of Prayer for All Nations (HOFPAN). All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-white/30 text-xs font-sans hover:text-white/60 transition-colors">Privacy</Link>
            <Link to="/terms" className="text-white/30 text-xs font-sans hover:text-white/60 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
