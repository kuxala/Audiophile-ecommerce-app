import { Link } from "react-router-dom";
import "../styles/SpeakersShowcase.css";

function SpeakersShowcase() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  }
  return (
    <>
      <div className="speakers">
        <div className="speaker-z9">
          <div className="speaker-left">
            <img
              src="../../assets/home/desktop/image-speaker-zx9.png"
              width="172px"
              className="zx9"
            />
          </div>
          <div className="text-right">
            <h1 className="speakers-h1">ZX9 SPEAKER</h1>
            <p className="speakers-p">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link
              className="black-btn button"
              to="/speakers/zx9-speaker"
              onClick={scrollToTop}
            >
              See product
            </Link>
          </div>
        </div>
        <div className="speaker-z7">
          <div className="center-z7">
            <h1 className="speakers-z7-h1">ZX7 SPEAKER</h1>
            <Link
              className="white-btn button"
              to="/speakers/zx7-speaker"
              onClick={scrollToTop}
            >
              See product
            </Link>
          </div>
        </div>

        <div className="speaker-xy1">
          <div className="left-image-earphones">
            <img
              src="../../assets/home/mobile/image-earphones-yx1.jpg"
              width="100%"
              height="100%"
              style={{ borderRadius: "8px" }}
            />
          </div>
          <div className="right-text-earphones">
            <div className="speaker-xy1-container">
              <div className="center-earphones">
                <h1 className="speakers-z7-h1">YX1 EARPHONES</h1>
                <Link
                  className="white-btn button"
                  to="/earphones/yx1-earphones"
                  onClick={scrollToTop}
                >
                  see product
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpeakersShowcase;
