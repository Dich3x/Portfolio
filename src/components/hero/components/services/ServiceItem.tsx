import { useTranslation } from "react-i18next";
import type { Service } from "../../Hero.data";

interface ServiceItemProps {
  service: Service;
  tPath: string;
}

export function ServiceItem({ service, tPath }: ServiceItemProps) {
  const Icon = service.icon;

  const { t } = useTranslation(undefined, {
    keyPrefix: `${tPath}.${service.key}`,
  });

  return (
    <div className="group flex gap-5 py-5 first:pt-0 last:pb-0">
      <span className="text-text-muted w-6 shrink-0 pt-1 text-xs">
        {service.number}
      </span>
      <div className="border-border bg-background-thirdary text-text-secondary group-hover:border-accent group-hover:text-accent flex size-10 shrink-0 items-center justify-center rounded-lg border transition-colors duration-300">
        <Icon size={19} strokeWidth={1.5} />
      </div>

      <div>
        <h4 className="text-text font-medium">{t("title")}</h4>
        <p className="text-text-secondary mt-1.5 max-w-sm text-xs leading-6">
          {t("description")}
        </p>
      </div>
    </div>
  );
}
