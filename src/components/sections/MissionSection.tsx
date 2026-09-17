export default function MissionSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#111111]">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1920&h=800&fit=crop&auto=format)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/90 to-[#111111]/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#A82626] text-xs font-sans uppercase tracking-[0.25em] mb-8">Our Mission</p>

          <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
            All Flesh to See<br />
            <span className="text-[#A82626]">the Salvation</span><br />
            of the Lord
          </h2>

          <div className="w-16 h-px bg-[#A82626] mx-auto mb-10" />

          <p className="text-white/60 font-sans text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            This is the heartbeat of everything we do — prayer, worship, outreach, community service, and the preaching of the gospel. Every nation. Every person. All flesh.
          </p>

          {/* Scripture */}
          <div className="border border-white/10 rounded-lg p-8 max-w-2xl mx-auto bg-white/5 backdrop-blur-sm">
            <p className="text-[#A82626] text-xs font-sans uppercase tracking-widest mb-4">Luke 3:6</p>
            <blockquote className="font-serif text-xl sm:text-2xl text-white italic leading-relaxed">
              "And all flesh shall see the salvation of God."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
