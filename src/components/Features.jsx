import { BentoTilt, BentoCard } from "./Bento";
import { TiLocationArrow } from "react-icons/ti";

const Features = () => (
  <section className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">
          Explore the Heart of Africa
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Journey through the wild landscapes of Africa, where majestic animals
          roam free, and the untamed beauty of nature unfolds before your eyes.
        </p>
      </div>

      {/* First large Bento */}
      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="videos/animal1.mp4"
          title={
            <>
              wild<b>e</b>scape
            </>
          }
          description="Immerse yourself in the raw beauty of the African savanna, where lions roar, elephants march, and the spirit of the wild reigns supreme."
          isComingSoon
        />
      </BentoTilt>

      {/* Grid Layout for Animal Features */}
      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="videos/africa2.mp4"
            title={
              <>
                k<b>i</b>ng's realm
              </>
            }
            description="The lion, ruler of the savanna, watches over his domain. His mighty roar echoes through the vast plains, a testament to his dominance and strength."
            isComingSoon
          />
        </BentoTilt>

        {/* Second element - Great Migration */}
        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src="videos/animal3.mp4"
            title={
              <>
                great <b>m</b>igration
              </>
            }
            description="Follow the epic journey of millions of wildebeests and zebras as they cross treacherous rivers in search of greener pastures, a true marvel of nature."
            isComingSoon
          />
        </BentoTilt>

        {/* Third element - Elephants */}
        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="videos/africa4.mp4"
            title={
              <>
                g<b>i</b>ants of the land
              </>
            }
            description="Towering elephants, the wise and gentle giants of Africa, traverse the golden plains, their footsteps echoing stories of ancient migrations."
            isComingSoon
          />
        </BentoTilt>

        {/* "More coming soon" Section */}
        <BentoTilt className="bento-tilt_2">
          <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
            <h1 className="bento-title special-font max-w-64 text-black">
              M<b>o</b>re w<b>o</b>nders a<b>w</b>ait.
            </h1>
            <TiLocationArrow className="m-5 scale-[5] self-end" />
          </div>
        </BentoTilt>

        {/* Final Video - Night in the Savannah */}
        <BentoTilt className="bento-tilt_2">
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

export default Features;
