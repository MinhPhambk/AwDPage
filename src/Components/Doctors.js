import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/TranVanLuc.jpg";
import profile2 from "../Assets/NguyenTuanDat.png";
import profile3 from "../Assets/Trang.jpg";

import profile4 from "../Assets/profile-4.png";
import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Đội ngũ</span>
        </h3>

        <p className="dt-description">
        Gặp gỡ đội ngũ gồm những sinh viên trẻ tuổi của Đại học Bách Khoa Hà Nội. Chúng tôi mang đến sản phẩm công nghệ giám sát độ tỉnh táo khi lái xe của tài xế. 
        Chúng tôi cống hiến tuổi trẻ và đam mê để xây dựng một tương lai an toàn hơn trên mỗi chuyến hành trình.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Trần Văn Lực "
          title="CEO"
          school = "Đại học Bách Khoa Hà Nội"
        />
        <DoctorCard
          img={profile2}
          name="Nguyễn Tuấn Đạt"
          title="CTO"
          school = "Đại học Bách Khoa Hà Nội"
        />
        <DoctorCard
          img={profile4}
          name="Phạm Ngọc Minh"
          title="siêu nhân"
          school = "Đại học Bách Khoa Hà Nội"
        />
        <DoctorCard
          img={profile3}
          name="Nguyễn Thùy Trang"
          title="đầu sỏ kinh tế"
          school = "Đại học Ngoại Thương"
        />
        <DoctorCard
          img={profile4}
          name="Nguyễn Ngọc Yến"
          title = "đầu sỏ kinh tế"
          school ="Vins University"
        />
        <DoctorCard
          img={profile4}
          name="Nguyễn Đình Nhật Minh"
          title="siêu nhân bt rap"
          school="Đại học Bách Khoa Hà Nội"
        />
      </div>
    </div>
  );
}

export default Doctors;
