import "./index.css";
import Hero from "./components/Hero";
import Trending from "./components/Trending";
import Artists from "./components/Artists";
import CtaAndPricing from "./components/ctaAndPricing";
function App() {
  return (
    <main>
      <Hero />
      <Trending />
      <Artists />
      <CtaAndPricing />
      <section className="bg-pink min-h-dvh"></section>
    </main>
  );
}

export default App;
