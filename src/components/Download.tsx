function Cta() {
  return (
    <section className="scroll-section min-h-screen flex items-center justify-center">
      {/* Centered box with gradient to bottom */}
      <div
        className="w-[360px] h-[320px] md:w-[920px] md:h-[420px] rounded-xl shadow-xl flex flex-col md:flex-row items-stretch overflow-hidden"
        style={{ background: "linear-gradient(to bottom, #892066, #89206633)" }}
      >
        {/* Left content column */}
        <div className="flex flex-col items-start gap-6 p-6 md:p-10 w-full md:w-1/2">
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-2">
            Don&apos;t Miss a Beat,
            <br />
          </h2>
          <p className="text-white/90 text-sm md:text-base">
            Don&apos;t miss out on the latest music news, exclusive offers and
            promotions, and news releases by signing up for our newsletter. Stay
            in the loop with the freshest music and be the first to know about
            upcoming events, artists spotlights, and more. Sign up now and never
            miss a beat!
          </p>
          <button className="button-download">Download Now</button>
        </div>

        {/* Right image aligned horizontally with content - fill the half */}
        <div className="w-full md:w-1/2 h-48 md:h-full">
          <img
            src="src/assets/headphones.png"
            alt="headphones"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Cta;
