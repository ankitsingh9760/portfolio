import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* FIRST */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Video Editor</h4>
                <h5>GTPL Hathway Limited</h5>
              </div>
            </div>
            <p>
              Worked as a video editor for 2 years, creating broadcast-ready
              content with a strong focus on clean editing, timing, and visual consistency.
            </p>
          </div>

          {/* SECOND */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Editor • Graphic Designer • Cameraman</h4>
                <h5>HD Productions</h5>
              </div>
            </div>
            <p>
              Managed complete production workflow including video editing,
              graphic design, and camera handling. Also worked as a drone pilot
              capturing cinematic aerial shots for professional projects.
            </p>
          </div>

          {/* THIRD */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Motion Designer & Video Editor</h4>
                <h5>Self Employed</h5>
              </div>
            </div>
            <p>
              Currently working with clients to create high-quality motion graphics,
              reels, and ad creatives focused on storytelling, engagement, and brand growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;