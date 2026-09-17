import { Link } from "react-router";

export default function WelcomeSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8F6F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-lg aspect-[4/5] bg-[#E8D5D5]">
              <img
                src="https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&h=1000&fit=crop&auto=format"
                alt="Worship and prayer at HOFPAN"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            {/* Accent card */}
            <div className="absolute -right-4 lg:-right-8 bottom-8 bg-[#A82626] text-white px-6 py-4 rounded shadow-xl">
              <p className="font-sans text-xs uppercase tracking-widest mb-1 opacity-80">Founded</p>
              <p className="font-serif text-2xl font-semibold">2005</p>
              <p className="font-sans text-xs mt-1 opacity-80">Mtwapa, Mombasa</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-[#A82626] text-xs font-sans uppercase tracking-[0.2em] mb-4">Welcome to the House</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-semibold text-[#111111] leading-tight mb-6">
              A Place Where<br />
              <em>The Lord Is Here</em>
            </h2>
            <div className="w-12 h-0.5 bg-[#A82626] mb-8" />
            <div className="space-y-4 text-[#6B7280] font-sans text-base leading-relaxed">
              <p>
                House of Prayer for All Nations — HOFPAN — was born on 3rd April 2005, in a classroom in Mtwapa, Mombasa. From those humble beginnings, God has built a community of faith, prayer, and outreach that continues to grow.
              </p>
              <p>
                We exist for one reason: <strong className="text-[#111111] font-medium">All Flesh to See the Salvation of the Lord.</strong> Every service, every ministry, every act of community care flows from this mission.
              </p>
              <p>
                Whether you are seeking God for the first time, returning to faith, or looking for a community to grow with — there is a place for you here.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center px-7 py-3.5 bg-[#A82626] text-white text-xs font-sans font-medium uppercase tracking-widest rounded hover:bg-[#8a1f1f] transition-colors"
              >
                Discover Our Story
              </Link>
              <Link
                to="/plan-visit"
                className="inline-flex items-center px-7 py-3.5 bg-transparent text-[#111111] text-xs font-sans font-medium uppercase tracking-widest rounded border border-[#111111]/20 hover:border-[#111111] transition-colors"
              >
                Plan a Visit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
