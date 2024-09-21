import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SwiperComponent: React.FC = () => {
  return (
    <Swiper spaceBetween={50} slidesPerView={1} className="p-8">
      <SwiperSlide>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="font-bold text-xl">Web Developer - DUT</h3>
          <p>
            Spearheaded the design and development of the company's website...
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="font-bold text-xl">Frontend Developer - Fides</h3>
          <p>
            Led the frontend development of PlayItaly, a high-traffic travel
            website...
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="font-bold text-xl">Frontend Developer - Ds Tech</h3>
          <p>
            Worked on diverse high-impact projects, including websites for
            banking...
          </p>
        </div>
      </SwiperSlide>
      {/* Add more slides as necessary */}
    </Swiper>
  );
};

export default SwiperComponent;
