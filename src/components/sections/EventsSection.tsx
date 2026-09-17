import { Link } from "react-router";
import { events } from "../../data/church";
import SectionHeading from "../ui/SectionHeading";

export default function EventsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8F6F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="What's Happening"
            title="Upcoming Events"
            subtitle="Join us for worship, fellowship, outreach and more."
          />
          <Link
            to="/events"
            className="flex-shrink-0 inline-flex items-center gap-2 text-xs font-sans font-medium uppercase tracking-widest text-[#A82626] hover:text-[#7F1D1D] transition-colors"
          >
            All Events
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <Link
              key={event.id}
              to="/events"
              className="group bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden bg-[#E8D5D5]">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 text-[#A82626] text-xs font-sans uppercase tracking-wider px-2.5 py-1 rounded font-medium">
                    {event.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-semibold text-[#111111] mb-2 group-hover:text-[#A82626] transition-colors">
                  {event.title}
                </h3>
                <p className="text-[#6B7280] text-xs font-sans mb-1">{event.date}</p>
                <p className="text-[#6B7280] text-sm font-sans leading-snug line-clamp-2">{event.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
