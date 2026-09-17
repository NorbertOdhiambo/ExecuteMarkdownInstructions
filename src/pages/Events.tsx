import { events } from "../data/church";

export default function Events() {
  return (
    <main>
      <div className="relative bg-[#111111] pt-32 pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1920&h=600&fit=crop&auto=format)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#A82626] text-xs font-sans uppercase tracking-[0.25em] mb-4">What's Happening</p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white">Events</h1>
          <p className="text-white/60 font-sans text-lg mt-4">Join us for worship, fellowship, outreach and more.</p>
        </div>
      </div>

      <section className="py-20 bg-[#F8F6F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                <div className="relative aspect-video overflow-hidden bg-[#E8D5D5]">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 text-[#A82626] text-xs font-sans uppercase tracking-wider px-2.5 py-1 rounded font-medium">
                      {event.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-[#111111] mb-2">{event.title}</h3>
                  <div className="space-y-1 mb-4">
                    <p className="text-[#6B7280] text-xs font-sans">📅 {event.date}</p>
                    <p className="text-[#6B7280] text-xs font-sans">📍 {event.location}</p>
                    {event.speaker && <p className="text-[#6B7280] text-xs font-sans">👤 {event.speaker}</p>}
                  </div>
                  <p className="text-[#6B7280] font-sans text-sm leading-relaxed">{event.description}</p>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <a
                      href="mailto:kkarisa810@gmail.com"
                      className="text-[#A82626] text-xs font-sans font-medium uppercase tracking-widest hover:text-[#7F1D1D] transition-colors"
                    >
                      Enquire →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center py-10 text-[#6B7280] font-sans text-sm">
            <p>More events will be added as they are confirmed. Contact us to learn about upcoming gatherings.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
