import classNames from 'classnames/bind';
import styles from './Slideshow.module.scss';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading';
import LoadingModal from '../LoadingModal';

const cx = classNames.bind(styles);

function Slideshow({ datas, title, className }) {
    const navigate = useNavigate();

    const classes = cx('wrapper', {
        [className]: className,
    });
    const navigateToDetail = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate('/details');
        }, 1500);
    };
    if (loading) {
        return <LoadingModal show={loading} />;
    }
    return (
        <div className={classes}>
            <div className={cx('header')}>
                <h4 className={cx('header-title')}>{title}</h4>
                <p className={cx('header-seemore')}>XEM TẤT CẢ</p>
            </div>

            <Swiper
                class="swiper_container"
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', clickable: true }}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                //autoplay={{ delay: 2000 }}
            >
                {datas.map((book) => (
                    <SwiperSlide>
                        <div key={book.id} className={cx('book')} onClick={() => navigate(`/details/${book.id}`)}>
                            <img className={cx('book-img')} src={book.cover_image_url} alt={book.title} />
                            <div className={cx('book-info')}>
                                <p className={cx('name')}>{book.title}</p>
                                <p className={cx('author')}>{book.author.name}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="slider-controler">
                    <div
                        className="swiper-button-prev slider-arrow"
                        style={{
                            fontSize: '30px',
                            top: '-230px',
                            padding: '20px',
                            backgroundColor: '#f8f9fa',
                            color: '#8cb9bd',
                        }}
                    >
                        <i class="fa-solid fa-chevron-left"></i>
                    </div>
                    <div
                        className="swiper-button-next slider-arrow"
                        style={{
                            fontSize: '30px',
                            top: '-230px',
                            padding: '20px',
                            backgroundColor: '#f8f9fa',
                            color: '#8cb9bd',
                        }}
                    >
                        <i class="fa-solid fa-chevron-right"></i>
                    </div>
                    <div className="swiper-pagination" style={{ bottom: '-35px' }}></div>
                </div>
            </Swiper>
        </div>
    );
}

export default Slideshow;
