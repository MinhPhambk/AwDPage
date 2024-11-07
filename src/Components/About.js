import React from "react";
import award1 from "../Assets/khoinghieptre.png";
import award2 from "../Assets/sangtaotre.png";
import award3 from "../Assets/SCIC.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={award1} alt="Doctor Group" className="about-image1" />
        <img src={award2} alt="Doctor Group" className="about-image2" />
        <img src={award3} alt="Doctor Group" className="about-image3" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>Tầm nhìn & Sứ mệnh
          </span>
        </h3>
        <p className="about-description">
        Tầm nhìn: “Mang lại hành trình an toàn và tỉnh táo cho mọi tài xế.”
        </p>
        <p className ="about-description">Sứ mệnh: "Giảm tai nan giao thông qua công nghệ sáng tạo."</p>

        <h3 className="about-title">
          <span>Giải thưởng & thành tựu
          </span>
        </h3>
        <p class = "about-description">
        <SolutionStep
          title="Quán quân cuộc thi Khởi nghiệp trẻ 2024"
          // description="Find your perfect specialist and book with ease at Health Plus. Expert doctors prioritize your health, offering tailored care."
        />
        </p>
        
        <p class="about-description">
        <SolutionStep
          title="Quán quân cuộc thi Sáng tạo trẻ 2023"
          //description="Choose the date and time that suits you best, and let our dedicated team of medical professionals ensure your well-being with personalized care."
        />
        </p>

        
        
        <p class="about-description">
        <SolutionStep
          title="Giải nhất SCIC 2022"
          //description="Our experienced doctors and specialists are here to provide expert advice and personalized treatment plans, helping you achieve your best possible health."
        />
        </p>
        

        <h3 className="about-title">
          <span>Đối tác
          </span>
        </h3>

        <p class="about-description">
        <SolutionStep
          title="BK Funds"
        />
        </p>

        <p class="about-description">
        <SolutionStep
          title="Vin Elab"
        />
        </p>


      </div>
    </div>
  );
}

export default About;
