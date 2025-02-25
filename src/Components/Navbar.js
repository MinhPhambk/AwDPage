import React, { useState } from "react";
import Logo from "../Assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";

function Navbar() {
  const [nav, setNav] = useState(false);
  // const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  // const handleChatBtnClick = () => {
  //   if (!isButtonDisabled) {
  //     toast.info("Experiencing high traffic, Please wait a moment.", {
  //       position: toast.POSITION.TOP_CENTER,
  //       onOpen: () => setIsButtonDisabled(true),
  //       onClose: () => setIsButtonDisabled(false),
  //     });
  //   }
  // };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        
        <Link to="/">
          <img className="navbar-logo" src={Logo} alt="Logo" />
          Awake Drive <span className="navbar-sign"></span>
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Trang chủ
          </Link>
        </li>
        <li>
          <a href="#services" className="navbar-links">
            Sản phẩm và Dịch vụ
          </a>
        </li>
        <li>
          <a href="#about" className="navbar-links">
            Giới thiệu 
          </a>
        </li>
        <li>
          <a href="#reviews" className="navbar-links">
            Đánh giá
          </a>
        </li>
        <li>
          <a href="#doctors" className="navbar-links">
            Đội ngũ
          </a>
        </li>
      </ul>

      <button
        className="navbar-btn"
        type="button"
        onClick={() => window.location.href = "https://www.facebook.com/neuralofthings"}
      >
        <FontAwesomeIcon icon={faCommentDots} /> Liên hệ ngay
      </button>

      

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <a onClick={openNav} href="#services">
              Services
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#about">
              About
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#reviews">
              Reviews
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#doctors">
              Doctors
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
