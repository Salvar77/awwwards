import { useEffect, useRef, useState } from "react";

const VideoCard = ({ src, title, description }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (window.innerWidth >= 992 && videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-md">
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        className="size-full object-cover object-center"
      />

      <div
        className={`absolute inset-0 z-20 flex-center md:hidden ${
          isPlaying
            ? "opacity-0 pointer-events-none"
            : "bg-black bg-opacity-50 opacity-100"
        } transition-opacity duration-300`}
        onClick={handlePlayPause}
      >
        {!isPlaying && (
          <button className="rounded-full bg-white px-4 py-2 text-sm uppercase text-black">
            Play
          </button>
        )}
      </div>

      <div className="absolute bottom-5 left-5 z-30 text-white">
        <h2 className="text-2xl font-bold uppercase">{title}</h2>
        <p className="mt-2 text-sm opacity-75">{description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
