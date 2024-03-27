
import classNames from 'classnames/bind';
import styles from './Slideshow.module.scss';
import { useRef, useState } from 'react';

const cx = classNames.bind(styles);

function Slideshow({ datas, title, className }) {
    let countClick = useRef(datas.length / 5);
    let boodWidth = 255;
    let move = boodWidth * 5;
    let prevDisabled, nextDisabled;

    const [limit, setLimit] = useState(countClick.current);
    const [state, setState] = useState(0);

    if (limit <= 1) nextDisabled = true; 
    if (limit >= countClick.current) prevDisabled = true;

    const handleNextSlide = () => {
        if (limit <= 1 ) {
            return;
        } else {
            setLimit((prev) => prev - 1);
            setState((prev) => prev + move);
        }
    };

    const handlePrevSlide = () => {
        if (limit >= countClick.current) {
            return;
        } else {
            setLimit((prev) => prev + 1);
            setState((prev) => prev - move);
        }
    };

    const classes = cx('wrapper', {
        [className]: className,
    });

    return (
        <div className={classes}>
            <div className={cx('header')}>
                <h4 className={cx('header-title')}>{title}</h4>
                <p className={cx('header-seemore')}>XEM TẤT CẢ</p>
            </div>

            <div className={cx('container')}>
                <div className={cx('sliders')} style={{ transform: `translate3d(${-state}px, 0, 0)` }}>
                    {datas.map((book, index) => (
                        <div key={index} className={cx('book')}>
                            <img className={cx('book-img')} src={book.image} alt={book.name} />
                            <div className={cx('book-info')}>
                                <p className={cx('name')}>{book.name}</p>
                                <p className={cx('author')}>{book.author}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={cx('control-btn')}>
                <div className={cx('prev-btn', { active: prevDisabled })} onClick={handlePrevSlide}>
                    <i class="fa-solid fa-chevron-left"></i>
                </div>
                
                <div className={cx('next-btn', { active: nextDisabled })} onClick={handleNextSlide}>
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
                
            </div>
        </div>
    );
}

export default Slideshow;
