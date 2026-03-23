import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>

      <div className="what-box">
        <div className="what-box-in">

          {/* BORDER */}
          <div className="what-border2">
            <svg width="100%">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
              <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
            </svg>
          </div>

          {/* 🔥 MOTION DESIGN */}
          <div className="what-content what-noTouch" ref={(el) => setRef(el, 0)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>

            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>MOTION DESIGN</h3>
              <h4>What I Do</h4>
              <p>
                I craft visually compelling motion graphics using After Effects, combining typography animation, precise tracking, and seamless compositing to bring ideas to life with clarity and impact.
              </p>

              <h5>Skills & Tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">After Effects</div>
<div className="what-tags">Photoshop</div>
<div className="what-tags">Illustrator</div>
<div className="what-tags">Typography Animation</div>
<div className="what-tags">Mocha Tracking</div>
<div className="what-tags">Video Compositing</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>

          {/* 🔥 EDITOR */}
          <div className="what-content what-noTouch" ref={(el) => setRef(el, 1)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>

            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>EDITOR</h3>
              <h4>Video Editing</h4>
              <p>
                I create smooth, engaging edits using professional tools, blending storytelling, color grading, and seamless transitions to deliver high-quality visual content.
              </p>

              <h5>Tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Premiere Pro</div>
                <div className="what-tags">DaVinci Resolve</div>
                <div className="what-tags">Final Cut Pro</div>
                <div className="what-tags">Color Grading</div>
                <div className="what-tags">Reels Editing</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>

          {/* 🔥 CAMERA (FIXED) */}
          <div className="what-content what-noTouch" ref={(el) => setRef(el, 2)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>

            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>CAMERA</h3>
              <h4>Production</h4>
              <p>
                I capture cinematic visuals with precision, combining composition, lighting, and drone shots to create impactful and professional footage.
              </p>

              <h5>Skills</h5>
              <div className="what-content-flex">
                <div className="what-tags">Cameraman</div>
                <div className="what-tags">Drone Pilot</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");

  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}