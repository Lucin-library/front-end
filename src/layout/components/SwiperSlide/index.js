import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import './index.css';

function SwiperSlider({ datas }) {
    return (
        <div class="wrapper">
            <Swiper
                class="swiper_container"
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                // navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', clickable: true }}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                autoplay={{ delay: 2000 }}
            >
                {datas.map((book) => (
                    <SwiperSlide>
                        <img src={book.cover_image_url} alt={book.title} />
                    </SwiperSlide>
                ))}
                <div class="slider-controler">
                    <div class="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    );
}

export default SwiperSlider;
