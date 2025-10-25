import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ArtistsList } from "../utils/constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Artists() {
  useGSAP(() => {
    const cards = gsap.utils.toArray(".artist-card") as HTMLElement[];

    cards.forEach((card, i) => {
      // Create a floating animation for each card
      const floatAnim = gsap.to(card, {
        y: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.3, // slight offset so they don’t move together
      });

      // Stop animation on hover
      card.addEventListener("mouseenter", () => floatAnim.pause());
      // Resume animation when hover ends
      card.addEventListener("mouseleave", () => floatAnim.resume());
    });
  });

  return (
    <section className="radial-background-blue min-h-dvh">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center text-center gap-4">
            <h3 className="white-gradient">Trending Artists</h3>
            <p className="text-gray-400">
              Discover the hottest and most popular artists in the industry
              today. Keep your library fresh and up-to- <br />
              date with our curated selection of tending musicians, bands and
              singers. From emerging talents to <br /> emerging stars, we’ve got
              you covered.
            </p>
          </div>

          <div className="flex gap-8 items-center justify-center mt-20">
            {ArtistsList.map((artist, index) => (
              <div key={index} className="artist-card">
                <div className="artist-cover">
                  <img
                    className="w-full h-full"
                    src={artist.src}
                    alt="Artist cover"
                  />
                </div>
                <h4>{artist.name}</h4>
                <p>{artist.songs} songs</p>
                <a
                  href="#"
                  className=" flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Explore
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Artists;
