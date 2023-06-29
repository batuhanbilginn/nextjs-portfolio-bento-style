import Footer from "@/components/footer";
import LeftPanel from "@/components/left-panel";
import RightPanel from "@/components/right-panel";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center flex-1 w-full h-full">
      {/* Pattern */}
      <div className="absolute inset-0 z-0 bg-light-pattern dark:bg-dark-pattern bg-verySmall" />
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white via-white/90 to-white dark:from-neutral-950 dark:via-neutral-950/90 dark:to-neutral-950" />
      <div className="container relative z-20 flex flex-col w-full h-full px-6 gap:6 xl:gap-10 xl:flex-row">
        {/* Left Panel */}
        <LeftPanel />
        {/* Right Panel */}
        <RightPanel />
        {/* Footer for Mobile */}
        <div className="flex pb-6 xl:hidden">
          <Footer />
        </div>
      </div>
    </main>
  );
}
