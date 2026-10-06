import { useTranslation } from "react-i18next";
import { heroConfig } from "../../Hero.data";

export function About() {
  const { t } = useTranslation(undefined, {
    keyPrefix: `${heroConfig.path}.aboutMe`,
  });

  return (
    <div className="bg-background flex flex-col gap-6 rounded-tl-2xl p-6">
      <span className="text-text-muted text-xs font-medium tracking-widest uppercase">
        {t("label")}
      </span>

      <h3 className="text-text text-4xl leading-tight font-medium tracking-tight">
        {t("headline")}
      </h3>

      <div className="text-text-secondary max-2xl mt-4 px-5 text-lg leading-8">
        <p className="py-6">{t("description")}</p>
      </div>
    </div>
  );
}
