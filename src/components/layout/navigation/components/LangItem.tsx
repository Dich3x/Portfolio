import { DockItem } from "@/components/layout/navigation/components/DockItem";
import type { NavItem } from "@/components/layout/navigation/Navigation.data";
import type { LangType } from "@/core/i18n/types";
import type { MotionValue } from "framer-motion";
import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

interface LangItemProps {
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
  isCompact: boolean;
  isDesktop: boolean;
  tPath: string;
}

export function LangItem({
  pointerX,
  pointerY,
  isCompact,
  isDesktop,
  tPath,
}: LangItemProps) {
  const { i18n } = useTranslation();

  const lang = i18n.language as LangType;

  const toggleLang = () => {
    const newLang: LangType = lang === "ru" ? "en" : "ru";

    i18n.changeLanguage(newLang);
  };

  const item = {
    type: "button",
    id: "lang",
    icon: Languages,
    onClick: toggleLang,
  } satisfies NavItem;

  return (
    <DockItem
      item={item}
      pointerX={pointerX}
      pointerY={pointerY}
      isCompact={isCompact}
      isDesktop={isDesktop}
      tPath={tPath}
    />
  );
}
