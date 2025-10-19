import Navbar from "./Navbar";

function Hero() {
  return (
    <>
      <section className="hero relative">
        <Navbar />
        {/* Head text */}
        <h1 className="text-center mt-[50%] lg:mt-4">
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
          <div className="flex flex-col items-center gap-4 ">
            <p>
              Stream endlessly, skip the noise, <br />
              and lose yourself in your favorite tracks.
            </p>
            <button>Download Now</button>
          </div>
          <div className="hidden md:flex md:flex-col ">
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
