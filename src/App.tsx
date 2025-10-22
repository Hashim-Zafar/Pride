import "./index.css";
import Hero from "./components/Hero";
import Trending from "./components/Trending";

function App() {
  return (
    <main>
      <Hero />
      <Trending />
      <section className="min-h-dvh"></section>
    </main>
  );
}

export default App;
