import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import 'swiper/css/navigation';



const Banner = () => {
    return (
        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides={true}
     loop={true}
     autoplay={{
       delay: 2000,
       disableOnInteraction: false,
     }}
     pagination={{
       clickable: true,
     }}
     navigation={true}
     modules={[Autoplay, Pagination, Navigation]}
     className="mySwiper" >



        <SwiperSlide>
            <div className="hero min-h-screen lg:w-full " style={{backgroundImage: 'url(https://i.ibb.co/f4JrsFv/sddefault.jpg)'}}>
  <div className="hero-overlay bg-opacity-60 "></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold"></h1>
     
    </div>
  </div>
</div>



</SwiperSlide>
        <SwiperSlide>
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/3kNyMwh/maxresdefault-1.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    
  </div>
</div>


        </SwiperSlide>
        <SwiperSlide>

        <div className=" hero min-h-screen " style={{backgroundImage: 'url(https://i.ibb.co/jwsr000/maxresdefault.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
   
  </div>
</div>


        </SwiperSlide>
        <SwiperSlide>

        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/z71QmfW/f3ec4df8-7fab-486b-9815-6fd8e871b7b6-169.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    
  </div>
</div>


        </SwiperSlide>
        <SwiperSlide>

        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/61zFrpQ/642d39a8154f8-Best-Tourist-Places-To-Visit-In-Vietnam.jpg)'}}>
  <div className="hero-overlay bg-opacity-50"></div>
  <div className="hero-content text-center text-neutral-content">
    
  </div>
</div>


        </SwiperSlide>
        <SwiperSlide>

        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/H7NDChg/maxresdefault-2.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    
  </div>
</div>


        </SwiperSlide>
        ...
      </Swiper>
    );
};

export default Banner;