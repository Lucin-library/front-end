import Slider from '../../layout/components/Slider';
import SlideShow from '../../components/Slideshow';
import { slides } from '../../components/Datas';

import { datas } from '../../components/Datas';
import { useState, useEffect } from 'react';
import { bookApi } from '../../api/book.js';
import classNames from 'classnames/bind';
import styles from './Homepage.module.scss';

const cx = classNames.bind(styles);

export default function HomePage() {
    // const [datas, setBooks] = useState([]);
    // useEffect(() => {
    //     bookApi
    //         .getNumberOfBook({ page: 1, pageSize: 10 })
    //         .then((data) => setBooks(data.data))
    //         .catch((err) => console.log(err));
    // }, []);
    return (
        <div className={cx('wrapper')}>
            <Slider slides={slides} />
            <SlideShow datas={datas} title="Sách đề cử" />
            <SlideShow datas={datas} title="Sách mới cập nhật" />
            <SlideShow datas={datas} title="Tác phẩm kinh điển" />
        </div>
    );
}
