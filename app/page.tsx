import Footer from "@/components/footer";
import GridItem from "@/components/grid-item";
import Equipments from "@/components/grid-items/equipments";
import Mentor from "@/components/grid-items/mentor";
import Project from "@/components/grid-items/project";
import Social from "@/components/grid-items/social";
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
        <div className="grid w-full grid-cols-4 gap-10 py-10 px-1 overflow-y-auto auto-rows-[76px]">
          {siteConfig.items.map((item, index) => {
            return (
              <GridItem key={index} size={item.layout}>
                {item.type === "social" ? (
                  <Social item={item} />
                ) : item.type === "mentor" ? (
                  <Mentor item={item} />
                ) : item.type === "project" ? (
                  <Project item={item} />
                ) : item.type === "equipment" ? (
                  <Equipments item={item} />
                ) : (
                  <div>Need to create new component type.</div>
                )}
              </GridItem>
            );
          })}
        </div>
      </div>
    </main>
  );
}
