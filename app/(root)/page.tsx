import Header from "./components/Header";
import ChartsSection from "./components/ChartSection";
import QuickActions from "./components/QuickActions";
import PriorityAlerts from "./components/PriorityAlerts";

export default function Home() {
  return (
    <div
      className="flex 
      flex-col 
      gap-5 
      bg-slate-100 
      min-h-screen 
      min-w-[calc(100vw-40rem)] 
      px-5 
      pt-5
      pb-20
      "
    >
      <Header />
      <ChartsSection />
      <QuickActions />
      <PriorityAlerts />
    </div>
  );
}
