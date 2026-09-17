import { Link } from "react-router";

export default function PrayerSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-[#1a0a0a]"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1920&h=800&fit=crop&auto=format)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#A82626]/95 to-[#7F1D1D]/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-white/60 text-xs font-sans uppercase tracking-[0.25em] mb-6">Prayer</p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            We Believe in<br />the Power<br />of Prayer
          </h2>
          <p className="text-white/80 font-sans text-base sm:text-lg leading-relaxed mb-10">
            Prayer is not just what we do — it is who we are. As a House of Prayer for All Nations, we stand with you in every season. Submit a prayer request and our team will pray with you and for you.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/prayer"
              className="inline-flex items-center px-8 py-4 bg-white text-[#A82626] text-sm font-sans font-medium uppercase tracking-widest rounded hover:bg-[#F8F6F3] transition-colors duration-200"
            >
              Request Prayer
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white text-sm font-sans font-medium uppercase tracking-widest rounded border border-white/40 hover:border-white transition-colors duration-200"
            >
              Our Beliefs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
