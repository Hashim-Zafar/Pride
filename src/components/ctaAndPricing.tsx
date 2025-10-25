import Pricing from "./Pricing";
import Download from "./Download";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function CtaAndPricing() {
  const triggerRef = useRef(null);
  const sectionRef = useRef(null);

  useGSAP(() => {
    // 1️⃣ Create a GSAP timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "2000 top",
        scrub: 0.9,
        pin: true,
      },
    });

    // 2️⃣ Add animations to that timeline
    tl.fromTo(sectionRef.current, { translateX: 0 }, { translateX: "-100vw" });
  }, []);
  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <Pricing />
          <Download />
        </div>
      </div>
    </section>
  );
}

export default CtaAndPricing;
