import { Link } from "react-router";

const items = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="10" cy="10" r="8" />
        <path d="M10 6v4l2.5 2.5" />
      </svg>
    ),
    label: "Sunday Worship",
    value: "[Service time to be confirmed]",
    to: "/plan-visit",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 2C6.7 2 4 4.7 4 8c0 4.5 6 10 6 10s6-5.5 6-10c0-3.3-2.7-6-6-6z" />
        <circle cx="10" cy="8" r="2" />
      </svg>
    ),
    label: "Find Us",
    value: "Mtwapa, Mombasa",
    to: "/contact",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 3c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7z" />
        <path d="M10 7v3l2 2" />
      </svg>
    ),
    label: "Prayer",
    value: "Submit a Prayer Request",
    to: "/prayer",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 3h16v11H2z" />
        <path d="M7 17h6M10 14v3" />
      </svg>
    ),
    label: "Connect",
    value: "+254 729 870 123",
    to: "/contact",
  },
];

export default function ServiceBar() {
  return (
    <section className="bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Link
              key={i}
              to={item.to}
              className="flex items-center gap-4 px-5 py-5 border-r border-gray-100 last:border-r-0 hover:bg-[#F8F6F3] transition-colors duration-200 group"
            >
              <div className="text-[#A82626] flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                {item.icon}
              </div>
              <div>
                <p className="text-[#6B7280] text-xs font-sans uppercase tracking-widest mb-0.5">{item.label}</p>
                <p className="text-[#111111] text-sm font-sans font-medium leading-snug">{item.value}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
