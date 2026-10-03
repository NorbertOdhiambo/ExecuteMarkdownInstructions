import HeroCarousel from "../components/hero/HeroCarousel";
import ServiceBar from "../components/sections/ServiceBar";
import WelcomeSection from "../components/sections/WelcomeSection";
import MissionSection from "../components/sections/MissionSection";
import ScriptureSection from "../components/sections/ScriptureSection";
import SermonsSection from "../components/sections/SermonsSection";
import MinistriesSection from "../components/sections/MinistriesSection";
import EventsSection from "../components/sections/EventsSection";
import PrayerSection from "../components/sections/PrayerSection";
import LeadershipSection from "../components/sections/LeadershipSection";
import LocationSection from "../components/sections/LocationSection";
import GivingSection from "../components/sections/GivingSection";
import ConnectSection from "../components/sections/ConnectSection";
import WeeklySchedule from "../components/sections/WeeklySchedule";
import CommunityImpactSection from "../components/sections/CommunityImpactSection";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <ServiceBar />
      <WelcomeSection />
      <WeeklySchedule />
      <MissionSection />
      <ScriptureSection />
      <SermonsSection />
      <MinistriesSection />
      <CommunityImpactSection />
      <EventsSection />
      <PrayerSection />
      <LeadershipSection />
      <LocationSection />
      <GivingSection />
      <ConnectSection />
    </main>
  );
}
