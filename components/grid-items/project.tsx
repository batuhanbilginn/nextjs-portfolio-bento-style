import { GridItemInterface } from "@/config/site-config";
import { Star } from "lucide-react";
import Icon from "../icon";

const Project = ({ item }: { item: GridItemInterface }) => {
  return (
    <div className="flex items-center justify-between gap-4">
      {item.icon && <Icon type={item.icon} color={item.color} />}
      <div className="w-full @lg:text-lg  font-semibold">{item.title}</div>
      <div className="flex items-center gap-1">
        <div className="mt-[1px]">{item.stars}</div>
        <Star fill="white" size={16} />
      </div>
    </div>
  );
};

export default Project;
