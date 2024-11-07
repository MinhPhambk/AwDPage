import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";


function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Sản phẩm và Dịch vụ</span>
        </h3>
        <p className="info-description">
          Hệ thống giám sát và duy trì tỉnh táo của tài xế của Awake Drive, bao gồm hệ thống đo sóng não và âm thanh isochronic.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Giám sát tỉnh táo theo thời gian thực"
          description="Hệ thống của chúng tôi liên tục theo dõi mức độ tỉnh táo của tài xế, phát hiện các dấu hiệu buồn ngủ hoặc mất tập trung. Thiết bị phân tích hoạt động sóng não theo thời gian thực và cung cấp phản hồi ngay lập tức để đảm bảo an toàn khi lái xe, giảm nguy cơ tai nạn."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Phát âm thanh isochronic duy trì sự tập trung"
          description="Bằng cách sử dụng các âm thanh isochronic được thiết kế đặc biệt, hệ thống giúp tăng cường sự tập trung, hỗ trợ tài xế duy trì tỉnh táo trong những chuyến đi dài hoặc khi gặp điều kiện đường xá khó khăn. Âm thanh này hoạt động hài hòa với sóng não của tài xế, giúp tăng độ tỉnh táo mà không gây xao nhãng."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Dễ dàng tích hợp vào nhiều loại xe"
          description="Được thiết kế linh hoạt, hệ thống giám sát tỉnh táo của chúng tôi có thể dễ dàng tích hợp vào nhiều loại phương tiện, mang lại hiệu quả và an toàn cho cả xe cá nhân và xe thương mại."
          icon={faTooth}
        />
      </div>

      <h3 className="info-title">
        <span>Các gói sản phẩm</span>
      </h3>
      

      <div className="info-cards-content">
        <InformationCard
          title="Cho cá nhân (B2C)"

          description="Chúng tôi cung cấp các gói sản phẩm dành riêng cho người dùng cá nhân, giúp duy trì sự tỉnh táo và tập trung trong các hoạt động hàng ngày. Các gói này được thiết kế để phù hợp với nhu cầu sử dụng của từng cá nhân, từ việc lái xe dài ngày đến các công việc yêu cầu sự chú ý liên tục. Với tính năng theo dõi sóng não và âm thanh isochronic, sản phẩm giúp bạn luôn tỉnh táo, tránh mệt mỏi và nâng cao hiệu quả công việc."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Cho doanh nghiệp (B2B)"
          description="Chúng tôi cung cấp các gói sản phẩm đặc biệt cho các doanh nghiệp, đặc biệt là các công ty trong lĩnh vực logistics, vận tải, và gọi xe. Các gói này giúp giám sát và duy trì sự tỉnh táo cho tài xế trong suốt quá trình làm việc, tăng cường an toàn giao thông và nâng cao năng suất lao động. Hệ thống có thể dễ dàng tích hợp vào nhiều loại phương tiện và được điều chỉnh để đáp ứng nhu cầu của từng doanh nghiệp."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Dịch vụ cho thuê"
          description="Ngoài các gói mua đứt, chúng tôi còn cung cấp dịch vụ cho thuê thiết bị theo các gói linh hoạt: hàng tháng, nửa năm và hàng năm. Dịch vụ này mang đến sự linh hoạt về chi phí và giúp các cá nhân hoặc doanh nghiệp dễ dàng tiếp cận công nghệ giám sát tỉnh táo mà không cần phải đầu tư quá lớn ngay từ ban đầu. Các gói thuê này phù hợp với nhu cầu sử dụng ngắn hạn hoặc dài hạn của khách hàng."
          icon={faTooth}
        />
        

      </div>
      

    </div>
    
  );
}

export default Info;
