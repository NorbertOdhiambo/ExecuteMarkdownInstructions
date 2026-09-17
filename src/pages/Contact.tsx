import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    if (!form.message.trim()) e.message = "Please enter a message.";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setState("loading");
    setTimeout(() => setState("success"), 1500);
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3.5 bg-white border rounded font-sans text-sm text-[#111111] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#A82626] focus:border-transparent transition-colors ${
      errors[field] ? "border-[#A82626]" : "border-gray-200"
    }`;

  return (
    <main>
      <div className="relative bg-[#111111] pt-32 pb-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#A82626] text-xs font-sans uppercase tracking-[0.25em] mb-4">Get in Touch</p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white">Contact Us</h1>
          <p className="text-white/60 font-sans text-lg mt-4">We would love to hear from you.</p>
        </div>
      </div>

      <section className="py-20 bg-[#F8F6F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-semibold text-[#111111] mb-6">Get in Touch</h2>
                <div className="space-y-5">
                  {[
                    {
                      icon: "📞",
                      label: "Phone",
                      value: "+254 729 870 123",
                      href: "tel:+254729870123",
                    },
                    {
                      icon: "✉️",
                      label: "Email",
                      value: "kkarisa810@gmail.com",
                      href: "mailto:kkarisa810@gmail.com",
                    },
                    {
                      icon: "📍",
                      label: "Address",
                      value: "Mtwapa, Mombasa\n[Full address to be confirmed]",
                      href: null,
                    },
                    {
                      icon: "⏰",
                      label: "Sunday Service",
                      value: "[Service time to be confirmed]",
                      href: null,
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-4">
                      <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                      <div>
                        <p className="text-[#6B7280] text-xs font-sans uppercase tracking-widest mb-1">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="font-sans text-sm text-[#111111] hover:text-[#A82626] transition-colors whitespace-pre-line">
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-sans text-sm text-[#111111] whitespace-pre-line">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#A82626] rounded-lg p-6 text-white">
                <p className="font-serif text-xl font-semibold mb-2">Prayer Request?</p>
                <p className="font-sans text-sm text-white/80 mb-4">
                  For prayer requests, please use our dedicated prayer page.
                </p>
                <a
                  href="/prayer"
                  className="inline-flex items-center text-xs font-sans font-medium uppercase tracking-widest text-white border-b border-white/40 hover:border-white transition-colors pb-0.5"
                >
                  Request Prayer →
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {state === "success" ? (
                <div className="bg-white rounded-xl border border-gray-100 p-12 text-center">
                  <div className="w-16 h-16 bg-[#A82626]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#A82626" strokeWidth="2">
                      <path d="M6 14l6 6 10-10" />
                    </svg>
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-[#111111] mb-3">Message Sent</h2>
                  <p className="text-[#6B7280] font-sans">
                    Thank you for reaching out. We will get back to you soon.
                  </p>
                </div>
              ) : (
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="c-name" className="block text-sm font-sans font-medium text-[#111111] mb-2">Name *</label>
                        <input id="c-name" type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className={inputClass("name")} />
                        {errors.name && <p className="mt-1.5 text-[#A82626] text-xs font-sans">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="c-email" className="block text-sm font-sans font-medium text-[#111111] mb-2">Email *</label>
                        <input id="c-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="email@example.com" className={inputClass("email")} />
                        {errors.email && <p className="mt-1.5 text-[#A82626] text-xs font-sans">{errors.email}</p>}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="c-phone" className="block text-sm font-sans font-medium text-[#111111] mb-2">Phone (optional)</label>
                      <input id="c-phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Phone number" className={inputClass("phone")} />
                    </div>
                    <div>
                      <label htmlFor="c-subject" className="block text-sm font-sans font-medium text-[#111111] mb-2">Subject</label>
                      <input id="c-subject" type="text" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="How can we help?" className={inputClass("subject")} />
                    </div>
                    <div>
                      <label htmlFor="c-message" className="block text-sm font-sans font-medium text-[#111111] mb-2">Message *</label>
                      <textarea id="c-message" rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Your message..." className={`${inputClass("message")} resize-none`} />
                      {errors.message && <p className="mt-1.5 text-[#A82626] text-xs font-sans">{errors.message}</p>}
                    </div>
                    <button
                      type="submit"
                      disabled={state === "loading"}
                      className="w-full py-4 bg-[#A82626] text-white text-sm font-sans font-medium uppercase tracking-widest rounded hover:bg-[#8a1f1f] transition-colors disabled:opacity-70"
                    >
                      {state === "loading" ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
