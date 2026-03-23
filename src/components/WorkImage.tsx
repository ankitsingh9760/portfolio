import { useState, useRef, useEffect } from "react";
import { MdArrowOutward, MdPlayCircleOutline } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isVideoPlaying && videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, [isVideoPlaying]);

  useEffect(() => {
    const handleScroll = () => {
      if (isVideoPlaying && videoRef.current) {
        const rect = videoRef.current.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) {
          videoRef.current.pause();
        }
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        if (isVideoPlaying && videoRef.current) {
          videoRef.current.pause();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isVideoPlaying]);

  const handleClick = (e: React.MouseEvent) => {
    if (props.video) {
      e.preventDefault();
      setIsVideoPlaying(true);
    }
  };

  const Wrapper = props.video ? "div" : "a";

  return (
    <div className="work-image" ref={containerRef as React.RefObject<HTMLDivElement>}>
      <Wrapper
        className="work-image-in"
        href={!props.video ? props.link : undefined}
        target={!props.video ? "_blank" : undefined}
        data-cursor={"disable"}
        onClick={handleClick}
        style={{ cursor: "pointer", display: "block", position: "relative" }}
      >
        {props.link && !props.video && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        
        {props.video && !isVideoPlaying && (
          <div className="work-link" style={{ opacity: 1, zIndex: 20 }}>
            <MdPlayCircleOutline />
          </div>
        )}
        
        <img
          src={props.image}
          alt={props.alt}
          style={{
            opacity: isVideoPlaying ? 0 : 1,
            transition: "opacity 0.4s ease-in-out",
            display: "block",
            width: "100%",
            borderRadius: "8px"
          }}
        />
        
        {props.video && (
          <video
            ref={videoRef}
            src={props.video.startsWith('/') ? props.video : `src/assets/${props.video}`}
            muted
            controls={isVideoPlaying}
            playsInline
            loop
            onClick={(e) => {
              if (isVideoPlaying) e.stopPropagation();
            }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
              borderRadius: "8px",
              opacity: isVideoPlaying ? 1 : 0,
              visibility: isVideoPlaying ? "visible" : "hidden",
              transition: "opacity 0.4s ease-in-out, visibility 0.4s",
              zIndex: 10,
              backgroundColor: "#000"
            }}
          ></video>
        )}
      </Wrapper>
    </div>
  );
};

export default WorkImage;
