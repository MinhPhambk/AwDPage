import React from "react";
import "../Styles/Footer.css";
import SubscribeNewsletter from "./SubscribeNewsletter";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">
              Awake Drive <span className="ft-sign"></span>
            </p>
            {/* <p className="ft-description">
              Talk to online doctors and get medical advice, online
              prescriptions, refills and medical notes within minutes. On-demand
              healthcare services at your fingertips.
            </p> */}
          </div>

          <SubscribeNewsletter />
        </div>

        

        <div className="ft-list" id="contact">
          <p className="ft-list-title">Trò chuyện với chúng tôi</p>
          <ul className="ft-list-items">
            <li>
              <a href="https://www.facebook.com/neuralofthings">
                  https://www.facebook.com/neuralofthings

              </a>
            </li>
            <li>
              <a href="mailto:neuralofthings@gmail.com">neuralofthings@gmail.com</a>
            </li>
            <li>
              <a href="tel:0386186183">0386186183</a>
            </li>

          </ul>
        </div>
      </div>

      <div className="ft-copyright">
        <p>© 2024 Awake Drive. All rights reserved.</p>

        
      </div>
    </div>
  );
}

export default Footer;
