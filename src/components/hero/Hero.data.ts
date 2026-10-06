import { appConfig } from "@/config";
import { Braces, Database, Layers3, type LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiApachekafka,
  SiBun,
  SiDocker,
  SiGit,
  SiKubernetes,
  SiLinux,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

export interface Service {
  key: string;
  number: string;
  icon: LucideIcon;
}

export interface Stat {
  key: string;
  value: string;
}

export interface Technology {
  name: string;
  icon: IconType;
  color: string;
}

type IHeroConfig = {
  path: string;
  services: Service[];
  stats: Stat[];
  technologies: Technology[];
};

export const heroConfig: IHeroConfig = {
  path: appConfig.i18n.hero,
  services: [
    { key: "frontend", number: "01", icon: Braces },
    { key: "backend", number: "02", icon: Database },
    { key: "engineering", number: "03", icon: Layers3 },
  ],
  stats: [
    { key: "projects", value: "06" },
    { key: "leetcode", value: "30+" },
    { key: "codewars", value: "100+" },
    { key: "areas", value: "03" },
  ],
  technologies: [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Vite", icon: SiVite, color: "#646CFF" },
    { name: "Bun", icon: SiBun, color: "#F9F1E1" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "Kafka", icon: SiApachekafka, color: "#231F20" },
    { name: "Redis", icon: SiRedis, color: "#DC382D" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Linux", icon: SiLinux, color: "#222222" },
  ],
};
