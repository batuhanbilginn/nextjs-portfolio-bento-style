import { GridItemInterface } from "@/config/site-config";
import Icon from "../icon";

const Mentor = ({ item }: { item: GridItemInterface }) => {
  return (
    <div className="flex items-center justify-between gap-4">
      {item.icon && <Icon type={item.icon} color={item.color} />}
      <div className="w-full text-lg font-semibold">{item.title}</div>
      {/* Price & Promo Container */}
      <div className="">
        {/* Top Container */}
        <div className="flex items-center justify-between">
          <div className="text-xs text-neutral-500">PROMO</div>
          <div className="flex items-center gap-1">
            {/* Old Price */}
            <div className="text-xs line-through text-neutral-500">
              {item.oldPrice}
            </div>
            <div>{item.price}</div>
          </div>
        </div>
        {/* Bottom Container */}
        <div className="font-bold text-primary">{item.promotion}</div>
      </div>
    </div>
  );
};

export default Mentor;
