import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);

  // Zmieniamy nazwę na bardziej uniwersalną
  const [loadedAssets, setLoadedAssets] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Stan określający, czy jesteśmy na "mobile" (< 992px)
  const [isMobile, setIsMobile] = useState(false);

  const totalMedia = 4;
  const nextMediaRef = useRef(null);

  // Funkcja do pobierania ścieżki do wideo
  const getVideoSrc = (index) => `videos/animal${index}.mp4`;
  // Funkcja do pobierania ścieżki do obrazów
  const getImageSrc = (index) => {
    const validIndex = ((index - 1) % totalMedia) + 1;
    return `img/aw${validIndex}.jpg`;
  };

  // Hook do monitorowania zmiany rozmiaru okna:
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 992);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleLoad = () => {
    setLoadedAssets((prev) => prev + 1);
  };

  const upcomingMediaIndex = (currentIndex % totalMedia) + 1;

  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingMediaIndex);
  };

  useEffect(() => {
    // Kiedy wszystko jest wczytane, możemy ukryć loader
    if (loadedAssets >= totalMedia - 1) {
      setIsLoading(false);
    }
  }, [loadedAssets]);

  // Animacje GSAP po kliknięciu
  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => {
            // Jeśli mamy wideo, odtwarzamy
            // Jeżeli to obraz, to nic nie robimy
            if (nextMediaRef.current?.tagName === "VIDEO") {
              nextMediaRef.current.play();
            }
          },
        });

        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  // Animacja maski / clipPath
  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
      borderRadius: "0 0 40% 10%",
    });

    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  // Główne renderowanie
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {isLoading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body_dot">
              <div className="three-body_dot">
                <div className="three-body_dot"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          {/* Przycisk/miniatura do kolejnego wideo/obrazu */}
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVdClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              {isMobile ? (
                <img
                  src={getImageSrc(currentIndex + 1)}
                  alt="next-media"
                  id="current-video"
                  className="size-64 origin-center scale-150 object-cover object-center"
                  onLoad={handleLoad}
                  ref={nextMediaRef}
                />
              ) : (
                <video
                  ref={nextMediaRef}
                  src={getVideoSrc(currentIndex + 1)}
                  loop
                  muted
                  id="current-video"
                  className="size-64 origin-center scale-150 object-cover object-center"
                  onLoadedData={handleLoad}
                />
              )}
            </div>
          </div>

          {/* Kolejne wideo/obraz, który rozwija się po kliknięciu */}
          {isMobile ? (
            <img
              src={getImageSrc(currentIndex)}
              alt="next-expanded"
              ref={nextMediaRef}
              id="next-video"
              className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
              onLoad={handleLoad}
            />
          ) : (
            <video
              ref={nextMediaRef}
              src={getVideoSrc(currentIndex)}
              loop
              muted
              id="next-video"
              className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
              onLoadedData={handleLoad}
            />
          )}

          {/* Główne wideo/obraz w tle */}
          {isMobile ? (
            <img
              src={getImageSrc(
                currentIndex === totalMedia - 1 ? 1 : currentIndex
              )}
              alt="current-media-bg"
              className="absolute left-0 top-0 size-full object-cover object-center"
              onLoad={handleLoad}
            />
          ) : (
            <video
              src={getVideoSrc(
                currentIndex === totalMedia - 1 ? 1 : currentIndex
              )}
              autoPlay
              loop
              muted
              className="absolute left-0 top-0 size-full object-cover object-center"
              onLoadedData={handleLoad}
            />
          )}
        </div>

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          A<b>f</b>rica
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1
              className="special-font hero-heading"
              style={{ textShadow: "2px 2px 4px black" }}
            >
              Sa<b>v</b>an<b>n</b>ah
            </h1>
            <p
              className="mb-5 max-w-64 font-robert-regular text-blue-100"
              style={{ textShadow: "2px 2px 4px black" }}
            >
              Enter the world of nature <br /> and discover extraordinary
              animals
            </p>

            <Button
              id="watch-trailer"
              title="Watch Trailer"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
