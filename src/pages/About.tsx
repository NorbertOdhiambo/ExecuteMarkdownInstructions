import { history, beliefs, church } from "../data/church";
import SectionHeading from "../components/ui/SectionHeading";

function PageHero() {
  return (
    <div className="relative bg-[#111111] pt-32 pb-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1438032005730-c779502df39b?w=1920&h=600&fit=crop&auto=format)" }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[#A82626] text-xs font-sans uppercase tracking-[0.25em] mb-4">Who We Are</p>
        <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white leading-tight">About HOFPAN</h1>
        <p className="text-white/60 font-sans text-lg mt-4 max-w-2xl">
          House of Prayer for All Nations — a community built on faith, prayer, and the mission to see all flesh know the salvation of God.
        </p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <main>
      <PageHero />

      {/* Identity */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading eyebrow="Our Identity" title="A House Built on Prayer" />
              <div className="space-y-4 text-[#6B7280] font-sans leading-relaxed">
                <p>
                  House of Prayer for All Nations — HOFPAN — is more than a church name. It is a declaration rooted in Scripture (Isaiah 56:7): that God's house is a place of prayer, open to all peoples and all nations.
                </p>
                <p>
                  Founded on 3rd April 2005 in Mtwapa, Mombasa, HOFPAN began in a classroom with a great vision and simple faith. God has been faithful, and what started as a small gathering has grown into a community touching lives through prayer, worship, ministry, and community service.
                </p>
                <p>
                  Our mission is bold and clear: <strong className="text-[#111111]">ALL FLESH TO SEE THE SALVATION OF THE LORD</strong> — echoing the cry of Luke 3:4–6 that every valley be filled, every mountain brought low, so that all may see God's salvation.
                </p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-[4/3] bg-[#E8D5D5]">
              <img
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop&auto=format"
                alt="HOFPAN community worship"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-[#A82626]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/60 text-xs font-sans uppercase tracking-[0.25em] mb-6">Our Mission</p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            All Flesh to See<br />the Salvation of the Lord
          </h2>
          <div className="bg-white/10 border border-white/20 rounded-lg p-8 mt-10">
            <p className="text-[#E8A0A0] text-xs font-sans uppercase tracking-widest mb-4">Luke 3:4–6</p>
            <blockquote className="font-serif text-lg sm:text-xl text-white italic leading-relaxed">
              "The voice of one crying in the wilderness, Prepare ye the way of the Lord, make his paths straight.
              Every valley shall be filled, and every mountain and hill shall be brought low; and the crooked shall be made straight,
              and the rough ways shall be made smooth; And all flesh shall see the salvation of God."
            </blockquote>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-[#F8F6F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our Story" title="Our Journey" center />
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-[#A82626]/20" aria-hidden="true" />
              <div className="space-y-10">
                {history.map((item, i) => (
                  <div key={i} className="relative flex gap-8">
                    <div className="w-12 h-12 rounded-full bg-[#A82626] flex items-center justify-center flex-shrink-0 z-10 shadow-sm">
                      <span className="text-white font-sans text-xs font-bold">{item.year.slice(-2)}</span>
                    </div>
                    <div className="flex-1 bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
                      <p className="text-[#A82626] text-xs font-sans uppercase tracking-widest mb-1">{item.year}</p>
                      <h3 className="font-serif text-xl font-semibold text-[#111111] mb-2">{item.title}</h3>
                      <p className="text-[#6B7280] font-sans text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Doctrine" title="What We Believe" center />
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
            {beliefs.map((belief, i) => (
              <div key={i} className="flex gap-4 p-6 bg-[#F8F6F3] rounded-lg border border-gray-100">
                <div className="w-8 h-8 rounded-full bg-[#A82626] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white font-sans text-xs font-bold">{i + 1}</span>
                </div>
                <p className="font-sans text-sm text-[#111111] leading-relaxed">{belief}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[#6B7280] text-xs font-sans mt-8">
            Statement of faith approved for initial presentation. Final wording to be confirmed by church leadership before public launch.
          </p>
        </div>
      </section>
    </main>
  );
}
