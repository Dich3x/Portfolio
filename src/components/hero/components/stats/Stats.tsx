import { heroConfig } from "../../Hero.data";
import { StatItem } from "./StatItem";

export function Stats() {
  const stats = heroConfig.stats

  const tPath = `${heroConfig.path}.stats`;

  return (
    <div className="grid grid-cols-2 overflow-hidden rounded-b-2xl md:grid-cols-4">
      {stats.map((stat, index) => (
        <StatItem
          key={stat.key}
          stat={stat}
          bordered={index > 0}
          tPath={tPath}
        />
      ))}
    </div>
  );
}
