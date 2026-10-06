import { useTranslation } from "react-i18next";
import type { Stat } from '../../Hero.data';

interface StatItemProps {
  stat: Stat;
  bordered: boolean;
  tPath: string;
}

export function StatItem({ stat, bordered, tPath }: StatItemProps) {
  const { t } = useTranslation(undefined, {
    keyPrefix: `${tPath}.${stat.key}`,
  });

  return (
    <div
      className={`bg-background-secondary p-6 ${bordered ? "border-border border-l" : ""}`}
    >
      <div className="text-text mt-2 text-4xl font-medium tracking-tight">
        {stat.value}
      </div>
      <div className="text-text-muted text-base font-medium tracking-wide">
        {t("label")}
      </div>
    </div>
  );
}
