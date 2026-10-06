import { useMotionValue } from "framer-motion";

import { NavConfig } from "./Navigation.data";
import { useMediaQuery } from "@/utils/useMediaQuery";
import { DockItem } from "./components/DockItem";
import { LangItem } from "@/components/layout/navigation/components/LangItem";

export const Navigation = () => {
  const tPath = NavConfig.path;

  const items = NavConfig.navItems;

  const pointerX = useMotionValue(-Infinity);
  const pointerY = useMotionValue(-Infinity);

  const isCompact = useMediaQuery("(max-width: 424px)");
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <nav
      aria-label="Main navigation"
      className="fixed bottom-0 left-0 z-50 flex h-auto w-full flex-row items-center justify-center gap-3 px-3 py-4 md:top-0 md:bottom-auto md:h-dvh md:w-auto md:flex-col md:gap-4"
      onPointerMove={(e) => {
        pointerX.set(e.clientX);
        pointerY.set(e.clientY);
      }}
      onPointerLeave={() => {
        pointerX.set(-Infinity);
        pointerY.set(-Infinity);
      }}
    >
      {items.map((item) => (
        <DockItem
          key={item.id}
          item={item}
          pointerX={pointerX}
          pointerY={pointerY}
          isCompact={isCompact}
          isDesktop={isDesktop}
          tPath={tPath}
        />
      ))}
      <LangItem
        key={"lang"}
        pointerX={pointerX}
        pointerY={pointerY}
        isCompact={isCompact}
        isDesktop={isDesktop}
        tPath={tPath}
      />
    </nav>
  );
};
