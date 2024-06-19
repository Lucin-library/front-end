import classNames from 'classnames/bind';
import styles from './Category.module.scss';
import Slider from '../../layout/components/Slider';
import { books, datas } from '../../components/Datas';
import BookList from '../../layout/components/BookList';
import SwiperSlider from '../../layout/components/SwiperSlide';

const cx = classNames.bind(styles);

function Category() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('slider')}>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div className={cx('col')}>
                                <div className={cx('content')}>
                                    <h2>THỂ LOẠI</h2>
                                    <h1>Tình Cảm</h1>
                                    <i>
                                        Sách tình cảm như một làn gió mát lành thổi vào tâm hồn của những người đọc.
                                        Sách tình cảm không chỉ đem đến những câu chuyện tình lãng mạn mà còn ẩn chứa
                                        trong đó những triết lý sâu sắc về cuộc sống, con người. Nếu bạn đang tìm một
                                        cuốn sách như vậy thì hãy tham khảo ngay 10 cuốn sách tình cảm hay nhất mọi thời
                                        đại nên đọc qua bài viết dưới đây nhé!
                                    </i>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            {/* <Slider slides={books} /> */}
                            <SwiperSlider />
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('book-list')}>
                <h2>Tất cả các sách</h2>
                <BookList books={datas} />
            </div>
        </div>
    );
}

export default Category;
