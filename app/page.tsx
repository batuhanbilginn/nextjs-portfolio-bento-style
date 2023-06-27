import Footer from "@/components/footer";
import LeftPanel from "@/components/left-panel";
import RightPanel from "@/components/right-panel";

export default function Home() {
  return (
    <main className="flex flex-col items-center flex-1 w-full h-full">
      <div className="container flex flex-col w-full h-full px-6 gap:6 xl:gap-10 xl:flex-row">
        {/* Left Panel */}
        <LeftPanel />
        {/* Right Panel */}
        <RightPanel />
        {/* Footer for Mobile */}
        <div className="flex pb-6 xl:hidden">
          <Footer key="mobile-footer" />
        </div>
      </div>
    </main>
  );
}
