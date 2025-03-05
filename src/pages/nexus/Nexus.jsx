import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { BentoTilt, BentoCard } from "../../components/Bento";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Nexus = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const [videosLoaded, setVideosLoaded] = useState(false);

  const handleVideoLoad = () => {
    if (
      videoRef1.current?.readyState >= 3 &&
      videoRef2.current?.readyState >= 3
    ) {
      setVideosLoaded(true);
    }
  };

  useEffect(() => {
    if (!videosLoaded) return;

    // 🔥 Animacja wejścia dla tekstu
    gsap.from(textRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // 🔥 Animacja wejścia dla obu wideo
    gsap.to([videoRef1.current, videoRef2.current], {
      scale: 1.05, // Delikatne powiększenie
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    // 🔥 Efekt ROZCIĄGANIA EKRANU (odwrotność oryginału)
    gsap.set(".nexus-frame", {
      clipPath: "polygon(20% 10%, 80% 8%, 85% 85%, 15% 90%)",
      borderRadius: "20% 30% 15% 25%",
    });

    gsap.to(".nexus-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      duration: 2,
      scrollTrigger: {
        trigger: ".nexus-frame",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    // 🔥 Stopniowe przyciemnienie tła przy scrollu
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
      backgroundColor: "#0d0d0d",
    });
  }, [videosLoaded]);

  return (
    <section id="nexus" className="bg-black pb-52" ref={containerRef}>
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32" ref={textRef}>
          <p className="font-circular-web text-lg text-blue-50">
            Enter the Lion's World
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            A world of strength, courage, and leadership. The lion’s world is
            one of wisdom and resilience, where power meets grace, and every
            step forward is a testament to inner strength.
          </p>
        </div>

        {/* Bento na górze */}
        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/africa2.mp4"
            title={
              <>
                L<b>i</b>on's Arch
              </>
            }
            description="A gateway to greatness—where strength, wisdom, and resilience define the path forward. Step into the Lion's Arch and embrace the spirit of leadership and power."
            isComingSoon
          />
        </BentoTilt>

        {/* 🟢 DWA WIDEO OBOK SIEBIE */}
        <div className="relative z-10 flex gap-7">
          <div className="nexus-frame relative w-1/2 h-[65vh] overflow-hidden rounded-lg bg-blue-75">
            <video
              ref={videoRef1}
              src="videos/animal4.mp4"
              loop
              muted
              autoPlay
              onCanPlayThrough={handleVideoLoad} //
              className="absolute left-0 top-0 size-full object-cover object-center opacity-0"
            />
          </div>

          <div className="nexus-frame relative w-1/2 h-[65vh] overflow-hidden rounded-lg bg-blue-75">
            <video
              ref={videoRef2}
              src="videos/africa1.mp4"
              loop
              muted
              autoPlay
              onCanPlayThrough={handleVideoLoad}
              className="absolute left-0 top-0 size-full object-cover object-center opacity-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nexus;
