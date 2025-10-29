import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { trendingCards } from "../utils/constants";

function Trending() {
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

  useGSAP(() => {
    //get all card element
    const cards = gsap.utils.toArray<HTMLElement>(cardsRef.current);
    //Initially center the cards
    gsap.set(cards[0], { xPercent: 100, opacity: 0 });
    gsap.set(cards[2], { xPercent: -100, opacity: 0 });
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#trending",
        start: "top 70%",
        end: "bottom bottom",
        scrub: true,
      },
    });
    timeline
      .to(
        cards[0],
        {
          xPercent: 0,
          opacity: 1,
          duration: 1,
          ease: "power1.out",
        },
        0
      )
      .to(
        cards[2],
        {
          xPercent: 0,
          opacity: 1,
          duration: 1,
          ease: "power1.out",
        },
        0
      );
  }, []);
  return (
    <div className="radial-background">
      <section id="trending">
        <div className="text-center">
          <h2>The Hottest Tracks Of the</h2>
          <h2>Week Only On Pride</h2>
          <p className="text-gray-500">
            Stream Millions of Songs Without any Interuptions
          </p>
        </div>
        <div className="grid-container">
          {trendingCards.map((card, i) => (
            <div
              key={i}
              ref={(el) => {
                cardsRef.current[i] = el!;
              }}
              className="card-wrapper"
            >
              <div className="card-blur"></div>
              <div className="card-border"></div>
              <div className="card">
                <img src={card.img} alt="Song" />
                <h3>{card.name}</h3>
                <p>{card.Band}</p>
                <p>{card.Listens}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Trending;
