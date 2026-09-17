import { createBrowserRouter, Outlet } from "react-router";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Sermons from "./pages/Sermons";
import SermonDetail from "./pages/SermonDetail";
import Ministries from "./pages/Ministries";
import Events from "./pages/Events";
import Leadership from "./pages/Leadership";
import Prayer from "./pages/Prayer";
import Give from "./pages/Give";
import PlanVisit from "./pages/PlanVisit";
import Contact from "./pages/Contact";

function Root() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

function NotFound() {
  return (
    <main className="pt-32 pb-20 min-h-screen bg-[#F8F6F3] flex items-center justify-center">
      <div className="text-center">
        <p className="text-[#A82626] text-xs font-sans uppercase tracking-widest mb-4">404</p>
        <h1 className="font-serif text-4xl font-bold text-[#111111] mb-4">Page not found</h1>
        <p className="text-[#6B7280] font-sans mb-8">The page you are looking for doesn't exist.</p>
        <a href="/" className="inline-flex items-center px-7 py-3.5 bg-[#A82626] text-white text-xs font-sans uppercase tracking-widest rounded hover:bg-[#8a1f1f] transition-colors">
          Go Home
        </a>
      </div>
    </main>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "sermons", Component: Sermons },
      { path: "sermons/:id", Component: SermonDetail },
      { path: "ministries", Component: Ministries },
      { path: "events", Component: Events },
      { path: "leadership", Component: Leadership },
      { path: "prayer", Component: Prayer },
      { path: "give", Component: Give },
      { path: "plan-visit", Component: PlanVisit },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
