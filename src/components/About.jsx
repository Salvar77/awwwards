import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    // Wykrywanie urządzenia mobilnego (np. szerokość ekranu < 768px)
    const isMobile = window.innerWidth < 768;

    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: isMobile ? "top top" : "center center",
        end: isMobile ? "+=400 top" : "+=800 center",
        scrub: 0.5,
        pin: !isMobile, // Na mobile nie przypinamy sekcji
        pinSpacing: !isMobile,
      },
    });

    clipAnimation.to(".mask-clip-path-about", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px]">
          Welcome to Awwwards!!
        </h2>

        <AnimatedTitle
          title="Disc<b>o</b>ver the world's <br /> l<b>a</b>rgest shared adventure !"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>The Africa Smashes now, are you ready?</p>
          <p>Experience the raw beauty and wonders of the wild continent.</p>
        </div>
      </div>

      <div className="h-dvh w-screen relative" id="clip">
        <div className="mask-clip-path-about about-image">
          <img
            src="img/lampart.jpg"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
