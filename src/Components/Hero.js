import React, { useEffect, useState } from "react";
import Doctor from "../Assets/home.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline"></p>
          <h2 className="text-title">
          Awake Drive - Vững bước trên đường dài
          </h2>
          <p className="text-descritpion">
          Giúp tài xế tỉnh táo, giảm tai nạn giao thông và nâng cao an toàn đường bộ
          Giám sát tỉnh táo theo thời gian thực, công nghệ sóng não, âm thanh isochronic, tích hợp AI và IoT...

          </p>
          <button
            className="text-appointment-btn"
            onClick={() => window.location.href = "https://www.facebook.com/neuralofthings"}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Tìm hiểu thêm
          </button>

          
          <div className="text-stats">
            <div className="text-stats-container">
              <p>5+</p>
              <p>Số giải thưởng</p>
            </div>

            <div className="text-stats-container">
              <p>30+</p>
              <p>Người thử nghiệm</p>
            </div>

            
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Doctor" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
