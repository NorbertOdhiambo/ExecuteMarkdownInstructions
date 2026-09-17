import { Link } from "react-router";

const faqs = [
  { q: "Where are you located?", a: "We are based in Mtwapa, Mombasa. The full address will be confirmed and updated here shortly." },
  { q: "When are services?", a: "We meet every Sunday. Service times will be confirmed and published here shortly. Contact us for the latest schedule." },
  { q: "What should I expect?", a: "Expect a warm welcome, vibrant worship, powerful prayer, a message from the Word of God, and genuine community. All are welcome, exactly as you are." },
  { q: "What should I wear?", a: "Come as you are. There is no dress code. We want you to feel comfortable and at home." },
  { q: "Is there children's ministry?", a: "Yes! We run Sunday School for children. Your children will be well cared for and will learn about faith in an age-appropriate environment." },
  { q: "Is parking available?", a: "[Parking information to be confirmed]" },
  { q: "How long is a service?", a: "[Typical service duration to be confirmed]" },
  { q: "Can I request prayer?", a: "Absolutely. Prayer is central to who we are. You can submit a prayer request online or speak with one of our team on the day." },
  { q: "Who can I contact?", a: "Apostle Stephen Karisa Iha — kkarisa810@gmail.com / +254 729 870 123" },
];

export default function PlanVisit() {
  return (
    <main>
      {/* Hero */}
      <div className="relative bg-[#A82626] pt-32 pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1920&h=600&fit=crop&auto=format)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/60 text-xs font-sans uppercase tracking-[0.25em] mb-4">First Time?</p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            We'd Love to Welcome You
          </h1>
          <p className="text-white/80 font-sans text-lg max-w-2xl mx-auto">
            Everything you need to know before your first visit to House of Prayer for All Nations.
          </p>
        </div>
      </div>

      {/* Quick info */}
      <section className="py-16 bg-[#F8F6F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "📍",
                title: "Find Us",
                body: "Mtwapa, Mombasa\n[Full address to be confirmed]",
              },
              {
                icon: "⏰",
                title: "Service Times",
                body: "Sunday Worship\n[Time to be confirmed]\n\n[Other services to be confirmed]",
              },
              {
                icon: "📞",
                title: "Get in Touch",
                body: "+254 729 870 123\nkkarisa810@gmail.com",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-8 border border-gray-100 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-xl font-semibold text-[#111111] mb-3">{item.title}</h3>
                <p className="text-[#6B7280] font-sans text-sm whitespace-pre-line leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          {/* What to expect */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-[#A82626] text-xs font-sans uppercase tracking-widest mb-4">What to Expect</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#111111] mb-6">
                Come As You Are
              </h2>
              <div className="space-y-4 text-[#6B7280] font-sans text-sm leading-relaxed">
                <p>
                  From the moment you arrive, you will be welcomed. There is no perfect church, no perfect people — just a community of faith seeking God together.
                </p>
                <p>
                  A typical Sunday includes worship and prayer, a message from the Word of God, and time to connect with others. Children's Sunday School runs alongside the adult service.
                </p>
                <p>
                  After the service, stay for fellowship. Our feeding program means there is always something shared. This is a community that takes caring for one another seriously.
                </p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-video bg-[#E8D5D5]">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=500&fit=crop&auto=format"
                alt="Community fellowship at HOFPAN"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <p className="text-[#A82626] text-xs font-sans uppercase tracking-widest mb-4 text-center">FAQ</p>
            <h2 className="font-serif text-3xl font-semibold text-[#111111] mb-10 text-center">Your Questions Answered</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-lg border border-gray-100 p-6">
                  <h3 className="font-sans font-semibold text-[#111111] mb-2">{faq.q}</h3>
                  <p className="text-[#6B7280] font-sans text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#A82626] text-white text-sm font-sans font-medium uppercase tracking-widest rounded hover:bg-[#8a1f1f] transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
