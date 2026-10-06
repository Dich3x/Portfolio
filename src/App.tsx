import { Hero } from "./components/hero/Hero";
import { MainLayout } from "./components/layout/MainLayout";
import { Navigation } from "./components/layout/navigation/Navigation";

function App() {
  return (
    <MainLayout>
      <Navigation />
      <Hero />
    </MainLayout>
  );
}

export default App;
