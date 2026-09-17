import { useState } from "react";

export default function ConnectSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-20 bg-[#F8F6F3] border-t border-gray-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[#A82626] text-xs font-sans uppercase tracking-[0.2em] mb-4">Stay Connected</p>
        <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#111111] mb-4">
          Join Our Community
        </h2>
        <p className="text-[#6B7280] font-sans text-base leading-relaxed mb-10">
          Get church news, upcoming events, encouragement and ministry updates delivered to your inbox.
        </p>

        {submitted ? (
          <div className="bg-white border border-gray-100 rounded-lg p-8 shadow-sm">
            <div className="w-12 h-12 bg-[#A82626]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#A82626" strokeWidth="2">
                <path d="M4 10l5 5 7-8" />
              </svg>
            </div>
            <p className="font-serif text-xl font-semibold text-[#111111] mb-2">You're connected.</p>
            <p className="font-sans text-[#6B7280] text-sm">Welcome to the HOFPAN community. We will be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-5 py-3.5 bg-white border border-gray-200 rounded font-sans text-sm text-[#111111] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#A82626] focus:border-transparent"
            />
            <button
              type="submit"
              className="px-7 py-3.5 bg-[#A82626] text-white text-xs font-sans font-medium uppercase tracking-widest rounded hover:bg-[#8a1f1f] transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-[#6B7280] text-xs font-sans mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
