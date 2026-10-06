import { useTranslation } from "react-i18next";
import { heroConfig } from "../../Hero.data";
import { ServiceItem } from "./ServiceItem";

export function Services() {
  const tPath = `${heroConfig.path}.whatIDo`;

  const services = heroConfig.services;

  const { t } = useTranslation(undefined, {
    keyPrefix: tPath,
  });
  return (
    <div className="bg-background-secondary rounded-tr-2xl p-6">
      <div className="mb-6">
        <span className="text-text-muted text-xs font-semibold tracking-widest uppercase">
          {t("label")}
        </span>

        <h3 className="text-text mt-3 text-2xl font-medium tracking-tight">
          {t("headline")}
        </h3>
      </div>
      {services.map((service) => (
        <ServiceItem
          key={service.key}
          service={service}
          tPath={`${tPath}.items`}
        />
      ))}
    </div>
  );
}
