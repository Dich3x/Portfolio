import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { motion } from "framer-motion";
import { useRef } from "react";
import { TechnologyItem } from "../technologies/TechnologyItem";
import { heroConfig } from "../../Hero.data";
import { useTranslation } from "react-i18next";

const GAP = 12;
const SPEED_PX_PER_SECOND = 40;

export function Toolbox() {
  const technologies = heroConfig.technologies;

  const tPath = `${heroConfig.path}.toolbox`;

  const { t } = useTranslation(undefined, {
    keyPrefix: tPath,
  });

  const trackRef = useRef<HTMLDivElement>(null);

  const x = useInfiniteScroll(trackRef, SPEED_PX_PER_SECOND, GAP);

  return (
    <div className="bg-background-thirdary flex w-full items-center gap-6 overflow-hidden py-3">
      <span className="text-text-muted shrink-0 pl-4 text-xs font-semibold tracking-widest uppercase">
        {t("label")}
      </span>
      <div className="before:from-background-thirdary after:from-background-thirdary relative overflow-hidden before:absolute before:top-0 before:left-0 before:z-10 before:h-full before:w-16 before:bg-linear-to-r after:absolute after:top-0 after:right-0 after:z-10 after:h-full after:w-16 after:bg-linear-to-l">
        <motion.div ref={trackRef} style={{ x, gap: GAP }} className="flex">
          {technologies.map((technology) => (
            <TechnologyItem technology={technology} key={technology.name} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
