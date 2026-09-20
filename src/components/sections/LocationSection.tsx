export default function LocationSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Info */}
          <div>
            <p className="text-[#A82626] text-xs font-sans uppercase tracking-[0.2em] mb-4">Find Us</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-semibold text-[#111111] leading-tight mb-6">
              The Lord Is Here.<br />Come Find Us.
            </h2>
            <div className="w-12 h-0.5 bg-[#A82626] mb-8" />

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded bg-[#F8F6F3] flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#A82626" strokeWidth="1.5">
                    <path d="M9 2C6.2 2 4 4.2 4 7c0 4 5 9 5 9s5-5 5-9c0-2.8-2.2-5-5-5z" />
                    <circle cx="9" cy="7" r="2" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-xs uppercase tracking-widest text-[#6B7280] mb-1">Address</p>
                  <p className="font-sans text-base text-[#111111] font-medium">Mtwapa, Mombasa</p>
                  <p className="font-sans text-sm text-[#6B7280]">[Full address to be confirmed]</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded bg-[#F8F6F3] flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#A82626" strokeWidth="1.5">
                    <circle cx="9" cy="9" r="7" />
                    <path d="M9 5v4l2.5 2.5" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-xs uppercase tracking-widest text-[#6B7280] mb-1">Sunday Worship</p>
                  <p className="font-sans text-base text-[#111111] font-medium">[Service time to be confirmed]</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded bg-[#F8F6F3] flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#A82626" strokeWidth="1.5">
                    <path d="M2 4.5A1.5 1.5 0 013.5 3h11A1.5 1.5 0 0116 4.5v9A1.5 1.5 0 0114.5 15h-11A1.5 1.5 0 012 13.5v-9z" />
                    <path d="M2 7h14" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-xs uppercase tracking-widest text-[#6B7280] mb-1">Phone</p>
                  <a href="tel:+254729870123" className="font-sans text-base text-[#111111] font-medium hover:text-[#A82626] transition-colors">
                    +254 729 870 123
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://maps.google.com/?q=Mtwapa,Mombasa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#A82626] text-white text-xs font-sans font-medium uppercase tracking-widest rounded hover:bg-[#8a1f1f] transition-colors"
              >
                Get Directions
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2 7h10M7 2l5 5-5 5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Map — OpenStreetMap embed pinned on Mtwapa, Mombasa */}
          <div className="relative rounded-lg overflow-hidden aspect-[4/3] shadow-sm border border-gray-100">
            <iframe
              title="HOFPAN location — Mtwapa, Mombasa"
              src="https://www.openstreetmap.org/export/embed.html?bbox=39.7%2C-3.97%2C39.77%2C-3.91&layer=mapnik&marker=-3.943%2C39.734"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              aria-label="Map showing Mtwapa, Mombasa"
            />
            {/* Branded pin overlay */}
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded px-3 py-2 shadow text-xs font-sans pointer-events-none">
              <span className="font-semibold text-[#111111]">HOFPAN</span>
              <span className="text-[#6B7280] ml-1">· Mtwapa, Mombasa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
