import type { Technology } from "../../Hero.data";

interface TechnologyItemProps {
  technology: Technology;
}

export function TechnologyItem({ technology }: TechnologyItemProps) {
  const Icon = technology.icon;

  return (
    <div className="bg-background-secondary text-text flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm">
      <Icon
        className="contrast-125"
        size={16}
        style={{ color: technology.color }}
      />
      <span>{technology.name}</span>
    </div>
  );
}
