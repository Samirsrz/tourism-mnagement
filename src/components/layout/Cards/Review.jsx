import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import 'swiper/css/navigation';




const Review = () => {
    return (
        <div className='relative w-[1770px] mx-auto'>
        <Swiper
     spaceBetween={30}
     slidesPerView={3}
     centeredSlides={true}
     loop={true}
     autoplay={{
       delay: 1000,
       disableOnInteraction: false,
     }}
     pagination={{
       clickable: true,
     }}
     navigation={true}
     modules={[Autoplay, Pagination, Navigation]}
     className="mySwiper"
      
    >


        <div className="flex">
            <SwiperSlide>
        <div className="card animate__animated animate__bounce animate__delay-1s  w-96 bg-blue-100 shadow-xl">
    <div className="card-body">
        
        <h2 className="card-title">Sophia Oliveria</h2>
        <p>Tranquil Forest Retreat provided the perfect escape from the hustle and bustle of daily life. Nestled deep within the woods, the atmosphere was serene and peaceful. The cabin-style accommodations were cozy and well-maintained, offering a rustic charm without sacrificing comfort. Exploring the nearby trails and spotting wildlife was a highlight of my stay. However, the remote location meant limited dining options, .</p>

    </div>
  </div>
  </SwiperSlide>

  <SwiperSlide>
        <div className="card w-96 animate__animated animate__bounce bg-orange-100 shadow-xl">
    <div className="card-body">
        
        <h2 className="card-title">Jenifer Lopez</h2>
        <p>My stay at Seaside Serenity Resort was absolutely magical! The ocean view from my room was breathtaking, and the sound of the waves lulled me to sleep every night. The staff were incredibly friendly and attentive, making sure every aspect of my stay was perfect. The amenities were top-notch, especially the spa services. I left feeling rejuvenated and already planning my next visit.</p>

    </div>
  </div>
  </SwiperSlide>

  <SwiperSlide>
        <div className="card w-96 animate__animated animate__bounce bg-yellow-100 shadow-xl">
    <div className="card-body">
        
        <h2 className="card-title">Mike Tyson</h2>
        <p>Our family had a wonderful time at the Family-Friendly Beach Resort! The kids loved the pool and daily activities organized by the resort staff. The beach was just steps away, making it easy to enjoy sandcastle building and swimming in the ocean. The rooms were spacious and clean, perfect for families. While the food at the on-site restaurants was tasty, there were not many options for picky eaters.</p>

    </div>
  </div>
  </SwiperSlide>
  <SwiperSlide>
        <div className="card w-96 animate__animated animate__bounce bg-pink-100 shadow-xl">
    <div className="card-body">
        
        <h2 className="card-title">Mia Sage</h2>
        <p>I cannot say enough good things about Luxury Lakeside Retreat! From the moment I arrived, I was treated like royalty. The property is stunning, with beautifully landscaped gardens and impeccable attention to detail. My room overlooking the lake was luxurious and equipped with every amenity imaginable. The dining experience was exceptional, with gourmet meals served with a view. I left feeling pampered and relaxed, already dreaming of my next visit.</p>

    </div>
  </div>
  </SwiperSlide>
  <SwiperSlide>
        <div className="card w-96 animate__animated animate__animate__backInDown bg-violet-100 shadow-xl">
    <div className="card-body">
       
        <h2 className="card-title">Anthony D-Costa</h2>
        <p>My experience at Urban Oasis Hotel was mixed. The location was convenient, right in the heart of the city, but the noise from the street made it difficult to sleep at night. The room itself was spacious and modern, but cleanliness could have been better. The hotel restaurant served decent food, but I found the prices to be a bit high for the quality. Overall, an average stay for a short city visit.</p>

    </div>
  </div>
  </SwiperSlide>
  <SwiperSlide>
        <div className="card w-96 animate__animated animate__bounce bg-lime-100 shadow-xl">
    <div className="card-body">
        
        <h2 className="card-title">Jacky jackson</h2>
        <p>Mountain Peak Lodge offers stunning views of the surrounding mountains and is perfect for nature enthusiasts. The rooms were clean and comfortable, although a bit dated in decor. The highlight of my stay was the hiking trails nearby, which provided excellent opportunities for outdoor exploration. The staff were polite, but service could be a bit slow at times. Overall, a great option for a rustic mountain getaway.</p>

    </div>
  </div>
  </SwiperSlide>

    </div>
    
    </Swiper>
    
    </div>
    );
};

export default Review;