import { useParams, Link } from "react-router";
import { sermons } from "../data/church";

export default function SermonDetail() {
  const { id } = useParams();
  const sermon = sermons.find((s) => s.id === id);

  if (!sermon) {
    return (
      <main className="pt-32 pb-20 min-h-screen bg-[#F8F6F3]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h1 className="font-serif text-3xl text-[#111111] mb-4">Sermon not found</h1>
          <Link to="/sermons" className="text-[#A82626] font-sans text-sm hover:underline">
            ← Back to Sermons
          </Link>
        </div>
      </main>
    );
  }

  const related = sermons.filter((s) => s.id !== id).slice(0, 2);

  return (
    <main className="bg-[#F8F6F3]">
      <div className="pt-24 bg-[#111111]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-0">
          <Link to="/sermons" className="inline-flex items-center gap-2 text-white/50 text-xs font-sans uppercase tracking-widest hover:text-white transition-colors mb-8">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M10 3L5 8l5 5" />
            </svg>
            All Sermons
          </Link>

          {/* Video Player Area */}
          <div className="relative bg-black rounded-t-lg overflow-hidden aspect-video">
            <img
              src={sermon.thumbnail}
              alt={sermon.title}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="w-20 h-20 rounded-full bg-[#A82626]/80 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="white" className="ml-2">
                  <path d="M7 6l16 8-16 8V6z" />
                </svg>
              </div>
              <p className="text-white/60 text-sm font-sans text-center px-8">
                {sermon.videoUrl === "[SERMON VIDEO URL TO BE CONFIRMED]"
                  ? "Video will be available once connected to the church's media source."
                  : ""}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main */}
          <div className="lg:col-span-2">
            <p className="text-[#A82626] text-xs font-sans uppercase tracking-widest mb-3">{sermon.series}</p>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111] mb-4">{sermon.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm font-sans text-[#6B7280] mb-8">
              <span>{sermon.speaker}</span>
              <span>·</span>
              <span>{new Date(sermon.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
              <span>·</span>
              <span>{sermon.scripture}</span>
            </div>
            <p className="text-[#6B7280] font-sans text-base leading-relaxed">{sermon.description}</p>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-gray-100">
              <h3 className="font-sans text-xs uppercase tracking-widest text-[#6B7280] mb-4">Share</h3>
              <div className="flex gap-3">
                {["Facebook", "WhatsApp", "Copy link"].map((platform) => (
                  <button
                    key={platform}
                    className="flex-1 py-2 text-xs font-sans border border-gray-200 rounded hover:border-[#A82626] hover:text-[#A82626] transition-colors text-[#6B7280]"
                  >
                    {platform}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="font-serif text-2xl font-semibold text-[#111111] mb-8">Related Sermons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((s) => (
                <Link
                  key={s.id}
                  to={`/sermons/${s.id}`}
                  className="group flex gap-4 bg-white rounded-lg p-4 border border-gray-100 hover:shadow-md transition-all"
                >
                  <div className="w-24 h-16 rounded overflow-hidden flex-shrink-0 bg-[#E8D5D5]">
                    <img src={s.thumbnail} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif text-sm font-semibold text-[#111111] group-hover:text-[#A82626] transition-colors line-clamp-2">
                      {s.title}
                    </h3>
                    <p className="text-[#6B7280] text-xs font-sans mt-1">{s.scripture}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
