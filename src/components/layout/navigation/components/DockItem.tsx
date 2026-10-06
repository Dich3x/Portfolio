import {
  motion,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import type { NavItem } from "../Navigation.data";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

interface DockItemProps {
  item: NavItem;
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
  isCompact: boolean;
  isDesktop: boolean;
  tPath: string;
}

const SPRING = {
  stiffness: 500,
  damping: 35,
  mass: 0.3,
};

export function DockItem({
  item,
  pointerX,
  pointerY,
  isCompact,
  isDesktop,
  tPath,
}: DockItemProps) {
  const { t } = useTranslation(undefined, {
    keyPrefix: `${tPath}.items.${item.id}`,
  });

  const anchorRef = useRef<HTMLDivElement>(null);

  const distanceX = useTransform(pointerX, (x) => {
    const bounds = anchorRef.current?.getBoundingClientRect();

    if (!bounds) return Infinity;

    return x - (bounds.left + bounds.width / 2);
  });

  const distanceY = useTransform(pointerY, (y) => {
    const bounds = anchorRef.current?.getBoundingClientRect();

    if (!bounds) return Infinity;

    return y - (bounds.top + bounds.height / 2);
  });

  const distance = isDesktop ? distanceY : distanceX;

  const minSize = isCompact ? 56 : 64;
  const maxSize = isCompact ? 72 : 88;

  const rawSize = useTransform(
    distance,
    [-120, 0, 120],
    [minSize, maxSize, minSize],
  );

  const size = useSpring(rawSize, SPRING);

  const textSize = useTransform(
    size,
    [minSize, maxSize],
    isCompact ? [9, 12] : [10, 15],
  );

  const iconSize = useTransform(
    size,
    [minSize, maxSize],
    isCompact ? [22, 30] : [24, 36],
  );

  const Icon = item.icon;

  return (
    <motion.div
      layout
      style={isDesktop ? { height: size } : { width: size }}
      className="relative flex h-16 w-16 items-center justify-center"
    >
      <div
        ref={anchorRef}
        className="absolute top-1/2 left-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2"
      >
        <motion.button
          type="button"
          aria-label={t("title")}
          title={t("title")}
          style={{
            width: size,
            height: size,
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
          }}
          className="bg-accent text-accent-light hover:bg-accent-hover hover:text-accent-contrast absolute flex flex-col items-center justify-center gap-1 rounded-2xl transition-colors"
          onClick={item.type === "button" ? item.onClick : undefined}
        >
          <motion.div
            style={{
              width: iconSize,
              height: iconSize,
            }}
          >
            <Icon className="h-full w-full stroke-2" />
          </motion.div>

          <motion.span
            style={{ fontSize: textSize }}
            className="max-w-full truncate px-1 text-[10px] leading-none font-medium sm:text-xs"
          >
            {t("title")}
          </motion.span>
        </motion.button>
      </div>
    </motion.div>
  );
}
