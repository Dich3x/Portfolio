import { Services } from "./components/services/Services";
import { About } from "./components/about/About";
import { Toolbox } from "./components/toolbox/Toolbox";
import { useTranslation } from "react-i18next";
import { heroConfig } from "./Hero.data";
import { Stats } from './components/stats/Stats';

export function Hero() {
  const { t } = useTranslation(undefined, { keyPrefix: heroConfig.path });

  return (
    <section id="about">
      <h1 className="text-text-subtle mb-3 ml-3 text-sm tracking-tight uppercase">
        {t("section")}
      </h1>
      <h2 className="mb-3 ml-3 text-4xl font-semibold tracking-wide">
        {t("title")}
      </h2>
      <div className="grid grid-cols-1 shadow-lg md:grid-cols-[1.15fr_1fr]">
        <About />
        <Services />
      </div>
      <Toolbox />
      <Stats />
    </section>
  );
}
