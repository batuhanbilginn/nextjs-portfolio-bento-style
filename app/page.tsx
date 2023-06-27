import Footer from "@/components/footer";
import { siteConfig } from "@/config/site-config";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center flex-1 w-full h-full">
      <div className="container flex w-full h-full gap-10 px-6">
        {/* Left Panel */}
        <div className="flex flex-col justify-between h-full max-w-sm py-10">
          {/* Top Container */}
          <div>
            <Image alt="avatar" src="/pp-new3.png" width={120} height={120} />
            {/* Text Container */}
            <div className="mt-6">
              <div className="text-xl font-medium text-primary">
                {siteConfig.title}
              </div>
              <h1 className="mt-2 text-4xl font-bold">{siteConfig.creator}</h1>
              <p className="text-2xl font-light text-neutral-500">
                {siteConfig.bio}
              </p>
            </div>
            {/* Buttons Container */}
            <div className="mt-6 space-y-4">
              <a
                href={`${siteConfig.locationLink}`}
                className="flex items-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-100 dark:border-neutral-800"
              >
                <MapPin size="14" />
                {siteConfig.location}
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-100 dark:border-neutral-800"
              >
                <Mail size="14" />
                Contact Me
              </a>
            </div>
          </div>
          {/* Footer */}
          <Footer />
        </div>
        {/* Right Panel */}
        <div className="grid w-full grid-cols-4 gap-10 py-10 overflow-y-auto auto-rows-[60px]">
          <div className="col-span-2 row-span-2 bg-yellow-200 ">1</div>
          <div className="col-span-1 row-span-2 bg-pink-200 ">2</div>
          <div className="col-span-1 row-span-2 bg-yellow-200 ">3</div>
          <div className="col-span-2 row-span-4 bg-pink-200">4</div>
          <div className="col-span-2 row-span-2 bg-yellow-200 ">5</div>
          <div className="col-span-2 row-span-1 bg-pink-200">6</div>
          <div className="col-span-2 row-span-1 bg-yellow-200">7</div>
          <div className="col-span-2 row-span-1 bg-pink-200">8</div>
          <div className="col-span-2 row-span-2 bg-yellow-200 ">10</div>
          <div className="col-span-2 row-span-1 bg-pink-200">9</div>
          <div className="col-span-2 row-span-2 bg-yellow-200 ">1</div>
          <div className="col-span-1 row-span-2 bg-pink-200 ">2</div>
          <div className="col-span-1 row-span-2 bg-yellow-200 ">3</div>
          <div className="col-span-2 row-span-4 bg-pink-200">4</div>
          <div className="col-span-2 row-span-2 bg-yellow-200 ">5</div>
          <div className="col-span-2 row-span-1 bg-pink-200">6</div>
          <div className="col-span-2 row-span-1 bg-yellow-200">7</div>
          <div className="col-span-2 row-span-1 bg-pink-200">8</div>
          {/* <div className="col-span-2 row-span-2 bg-yellow-200 ">10</div>
          <div className="col-span-2 row-span-1 bg-pink-200">9</div> */}
        </div>
      </div>
    </main>
  );
}
