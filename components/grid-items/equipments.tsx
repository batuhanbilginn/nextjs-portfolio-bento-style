import { GridItemInterface } from "@/config/site-config";
import Image from "next/image";
import Link from "next/link";

const Equipments = ({ item }: { item: GridItemInterface }) => {
  return (
    <div className="flex flex-col items-end justify-end w-full h-full overflow-hidden rounded-3xl">
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-neutral-950/40 to-neutral-950/60" />
      {/* Image */}
      <Image
        className="z-0 object-cover object-center w-full h-full"
        src={item.image ?? ""}
        alt="equipments"
        fill
      />
      {/* Content */}
      <div className="relative z-20 w-full px-6 py-6 space-y-3">
        <div className="text-sm font-medium text-white">{item.title}</div>
        <div className="flex flex-wrap items-center gap-3">
          {item.equipments?.map((equipment) => {
            return (
              <Link
                className="px-2 py-1 text-sm font-medium bg-white rounded-lg dark:bg-neutral-900"
                key={equipment.link}
                href={equipment.link}
              >
                {equipment.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Equipments;
