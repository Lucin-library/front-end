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
                                    <h1>Phát triển bản thân</h1>
                                    <i>
                                        Sách phát triển bản thân (self-help) thường nói về về cuộc sống, nhân sinh, cách
                                        suy nghĩ và nhìn nhận mọi thứ xung quanh nhằm đưa ra câu trả lời cho vấn đề bạn
                                        đang gặp phải, đồng thời giúp hoàn thiện bản thân hơn. <br />
                                        {/* Một trong những lợi ích rõ ràng nhất của sách self-help chính là khả năng truyền
                                        động lực. Khi đọc sách, bạn sẽ được nghe câu chuyện kể về những trải nghiệm, quá
                                        trình đi lên, con đường chạm đến thành công của tác giả. Nếu hoàn cảnh của người
                                        viết giống bạn, chắc chắn nguồn động lực mà bạn nhận được từ cuốn sách sẽ vô
                                        cùng lớn lao. */}
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
