import { appConfig } from "@/config";
import { Building, Disc, Smile, Tag, type LucideIcon } from "lucide-react";

type INavConfig = {
  path: string;
  navItems: NavItem[];
};

type NavLink = {
  type: "link";
  id: NaviId;
  link: `#${string}`;
  icon: LucideIcon;
};

type NavButton = {
  type: "button";
  id: NaviId;
  icon: LucideIcon;
  onClick: () => void;
};

export type NavItem = NavLink | NavButton;

export type NaviId = "hero" | "contact" | "skills" | "howIWork" | "lang";

export const NavConfig: INavConfig = {
  path: appConfig.i18n.navigation,
  navItems: [
    { type: "link", id: "hero", link: "#hero", icon: Tag },
    { type: "link", id: "skills", link: "#skills", icon: Building },
    { type: "link", id: "howIWork", link: "#howIWork", icon: Disc },
    { type: "link", id: "contact", link: "#contact", icon: Smile },
  ],
};
