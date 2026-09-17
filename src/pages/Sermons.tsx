import { useState } from "react";
import { Link } from "react-router";
import { sermons } from "../data/church";
import SectionHeading from "../components/ui/SectionHeading";

export default function Sermons() {
  const [search, setSearch] = useState("");

  const filtered = sermons.filter(
    (s) =>
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.speaker.toLowerCase().includes(search.toLowerCase()) ||
      s.series.toLowerCase().includes(search.toLowerCase()) ||
      s.scripture.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      {/* Hero */}
      <div className="relative bg-[#111111] pt-32 pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1920&h=600&fit=crop&auto=format)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#A82626] text-xs font-sans uppercase tracking-[0.25em] mb-4">Feed Your Faith</p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white leading-tight">Sermons</h1>
          <p className="text-white/60 font-sans text-lg mt-4 max-w-2xl">
            Powerful messages rooted in the Word of God. Watch, listen, and be transformed.
          </p>
        </div>
      </div>

      <section className="py-16 bg-[#F8F6F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search */}
          <div className="max-w-xl mb-12">
            <label htmlFor="sermon-search" className="sr-only">Search sermons</label>
            <div className="relative">
              <input
                id="sermon-search"
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by title, speaker, series, or Scripture..."
                className="w-full px-5 py-4 pl-12 bg-white border border-gray-200 rounded-lg font-sans text-sm text-[#111111] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#A82626] focus:border-transparent"
              />
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]"
                width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5"
              >
                <circle cx="8" cy="8" r="5" />
                <path d="M13 13l3 3" />
              </svg>
            </div>
          </div>

          {/* Results */}
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-serif text-2xl text-[#111111] mb-3">No messages found</p>
              <p className="text-[#6B7280] font-sans">Try another search or browse our latest messages.</p>
              <button onClick={() => setSearch("")} className="mt-6 text-[#A82626] text-sm font-sans hover:underline">
                Clear search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((sermon) => (
                <Link
                  key={sermon.id}
                  to={`/sermons/${sermon.id}`}
                  className="group bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative overflow-hidden aspect-video bg-[#E8D5D5]">
                    <img
                      src={sermon.thumbnail}
                      alt={sermon.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="white" className="ml-1">
                          <path d="M5 4l11 6-11 6V4z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#A82626] text-white text-xs font-sans uppercase tracking-wider px-2.5 py-1 rounded">
                        {sermon.series}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[#6B7280] text-xs font-sans uppercase tracking-widest mb-2">
                      {new Date(sermon.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                    </p>
                    <h3 className="font-serif text-xl font-semibold text-[#111111] mb-2 group-hover:text-[#A82626] transition-colors">
                      {sermon.title}
                    </h3>
                    <p className="text-[#6B7280] text-sm font-sans mb-4">{sermon.speaker}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-[#A82626] text-xs font-sans uppercase tracking-widest font-medium">{sermon.scripture}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* No sermons available note */}
          {filtered.length > 0 && (
            <div className="mt-12 text-center">
              <p className="text-[#6B7280] text-sm font-sans">
                Sermon video and audio links will be connected once the church's media source is confirmed.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
