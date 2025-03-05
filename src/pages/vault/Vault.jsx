import { TiLocationArrow } from "react-icons/ti";
import { BentoTilt, BentoCard } from "../../components/Bento";

const Vault = () => (
  <section id="vault" className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">
          Enter the Africa World Wide
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Discover the hidden wonders of Africa – from its majestic landscapes
          to ancient civilizations.
        </p>
      </div>

      {/* Główne duże wideo na początku */}
      <BentoTilt className="border-hsla relative mb-7 h-[70vh] w-full overflow-hidden rounded-md">
        <BentoCard
          src="videos/africa1.mp4"
          title={
            <>
              The Heart of <b>Africa</b>
            </>
          }
          description="An immersive journey into the untouched beauty of Africa’s savannahs, deserts, and rainforests."
          isComingSoon
        />
      </BentoTilt>

      {/* Nowy dynamiczny układ */}
      <div className="grid h-[140vh] w-full grid-cols-3 grid-rows-[auto_auto] gap-7">
        {/* 📌 1. Zdjęcie - Lewa kolumna, duże */}
        <BentoTilt className="bento-tilt_1 md:col-span-2 md:row-span-1 h-[47.3vh]">
          <BentoCard
            src="videos/africa5.mp4"
            title={
              <>
                S<b>a</b>hara
              </>
            }
            description="Explore the vast, golden dunes of the Sahara, where the sun meets the endless horizon."
            isComingSoon
          />
        </BentoTilt>

        {/* 📌 2. Zdjęcie - Prawa kolumna, wysokie */}
        <BentoTilt className="bento-tilt_1 md:col-span-1 md:row-span-2 h-[100vh]">
          <BentoCard
            src="videos/africa2.mp4"
            title={
              <>
                n<b>e</b>xus
              </>
            }
            description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
            isComingSoon
          />
        </BentoTilt>

        {/* 📌 3. Zdjęcie - Dolna część, lewa strona */}
        <BentoTilt className="bento-tilt_1 md:col-span-1 h-[50vh]">
          <BentoCard
            src="videos/africa4.mp4"
            title={
              <>
                Lions<b> World</b>
              </>
            }
            description="Step into the wild and witness the strength and grace of Africa’s most powerful predators."
            isComingSoon
          />
        </BentoTilt>

        {/* 📌 4. Zdjęcie - Środkowa część */}
        <BentoTilt className="bento-tilt_1 md:col-span-1 h-[50vh]">
          <BentoCard
            src="videos/africa3.mp4"
            title={
              <>
                The <b>Empire</b>
              </>
            }
            description="Uncover the mysteries of Africa’s ancient civilizations and legendary kingdoms."
            isComingSoon
          />
        </BentoTilt>

        {/* 📌 Sekcja "More coming soon" */}
        <BentoTilt className="bento-tilt_2">
          <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
            <h1 className="bento-title special-font max-w-64 text-black">
              M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
            </h1>
            <TiLocationArrow className="m-5 scale-[5] self-end" />
          </div>
        </BentoTilt>

        {/* 📌 Ostatnie wideo - Pełna szerokość na dole */}
        <BentoTilt className="bento-tilt_2 md:col-span-3 h-[50vh]">
          <video
            src="videos/africa6.mp4"
            loop
            muted
            autoPlay
            className="size-full object-cover object-center"
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Vault;
