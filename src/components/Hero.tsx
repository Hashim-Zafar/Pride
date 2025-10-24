import Navbar from "./Navbar";
import SplitText from "gsap/src/SplitText";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
gsap.registerPlugin(SplitText);
function Hero() {
  useEffect(() => {
    const heroSplit = SplitText.create("#headline", { type: "chars words" });
    const lineSplit = SplitText.create(".paragraph", { type: "lines" });
    heroSplit.chars.forEach((char) => {
      char.classList.add("white-gradient");
    });

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      stagger: 0.03,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
    });
    gsap.from(lineSplit.lines, {
      yPercent: 100,
      opacity: 0,
      ease: "expo.out",
      duration: 1,
      stagger: 0.02,
      delay: 1,
    });
  }, []);

  return (
    <>
      <section className="hero relative">
        <Navbar />
        {/* Head text */}
        <h1 id="headline" className="text-center mt-[50%] lg:mt-4">
          Music Without <br />
          Limits
        </h1>
        {/* Hero image */}
        <div className=" hero-img">
          <img
            src="src/assets/Hero.png"
            alt="Hero.png"
            className="object-contain h-full w-full"
          />
        </div>
        {/* Downlaod Button and text */}
        <div className="flex items-center justify-center  lg:items-center text-center lg:justify-between lg:mx-[3%] lg:h-[50%]">
          <div className="paragraph flex flex-col items-center gap-4 ">
            <p>
              Stream endlessly, skip the noise, <br />
              and lose yourself in your favorite tracks.
            </p>
            <p>
              <button>Download Now</button>
            </p>
          </div>
          <div className="paragraph hidden md:flex md:flex-col ">
            <span>Loud.Limitless.Alive</span>
            <h4 className="text-5xl gradient-text">
              Feel the Beat <br /> of Freedom
            </h4>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
