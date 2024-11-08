import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/TranVanLuc.png";
import profile2 from "../Assets/NguyenTuanDat.png";
import profile3 from "../Assets/Trang.png";
import profile4 from "../Assets/PhamNgocMinh.png";
import profile5 from "../Assets/Yen.png";
import profile6 from "../Assets/Minh.png";
import profile7 from "../Assets/Thanh.png";
import profile8 from "../Assets/Quyen.png";
import profile9 from "../Assets/Chau.jpg";
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
          school = "Khoa học Máy tính - HUST"
        />
        <DoctorCard
          img={profile2}
          name="Nguyễn Tuấn Đạt"
          title="CTO"
          school = "Công nghệ thông tin Việt-Nhật - HUST"
        />
        <DoctorCard
          img={profile4}
          name="Phạm Ngọc Minh"
          title="Develop"
          school = "Khoa học Máy tính - HUST"
        />
        <DoctorCard
          img={profile3}
          name="Nguyễn Thùy Trang"
          title="Kinh tế"
          school = "Quản trị kinh doanh- FTU"
        />
        <DoctorCard
          img={profile5}
          name="Nguyễn Ngọc Yến"
          title = "Kinh tế"
          school ="Quản trị kinh doanh- VinUni"
        />
        <DoctorCard
          img={profile6}
          name="Nguyễn Đình Minh Nhật"
          title="Tài chính"
          school="Quản trị kinh doanh - VinUni"
        />
        <DoctorCard
          img={profile7}
          name="Nguyễn Trí Thanh"
          title="R&D"
          school="Khoa học Dữ liệu và Trí tuệ Nhân tạo - HUST"
        />
        <DoctorCard
          img={profile8}
          name="Phan Hà Quyên"
          title="R&D"
          school="Kỹ thuật Máy tính - Hust"
        />
        <DoctorCard
          img={profile9}
          name="Phạm Hoàng Minh Châu"
          title="R&D"
          school="Công nghệ thông tin Việt-Nhật - Hust"
        />
      </div>
    </div>
  );
}

export default Doctors;
