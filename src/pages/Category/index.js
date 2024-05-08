import classNames from 'classnames/bind';
import styles from './Category.module.scss';
import BookList from '../../layout/components/BookList';
import SwiperSlider from '../../layout/components/SwiperSlide';
import { bookApi } from '../../api/book';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button';

const cx = classNames.bind(styles);

function Category() {
    let { name } = useParams();
    const [books, setBooks] = useState({});
    const [page, setPage] = useState(1);
    let isNextButtonDisabled = page === books.lastPage;
    let isPreviousButtonDisabled = page === 1;

    useEffect(() => {
        bookApi
            .getBooksByGenre({ genre: name, page: page, pageSize: 8 })
            .then((data) => setBooks(data.data))
            .catch((error) => console.log(error));
        window.scrollTo(0, 0);
    }, [page]);

    const handleNextPage = () => {
        if (page <= books.lastPage) {
            setPage((page) => page + 1);
        }
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage((page) => page - 1);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('slider')}>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div className={cx('col')}>
                                <div className={cx('content')}>
                                    <h2>THỂ LOẠI</h2>
                                    <h1>{name}</h1>
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
                        <div class="col-md-6">{books.books !== undefined && <SwiperSlider datas={books.books} />}</div>
                    </div>
                </div>
            </div>
            <div className={cx('book-list')}>
                <h2>Tất cả các sách</h2>
                {books.books !== undefined && <BookList books={books.books} />}
            </div>
            <nav className={cx('nav-pagination')}>
                <ul className={cx('pagination')}>
                    <li className={cx('page-item')}>
                        <Button
                            className={cx('page-btn')}
                            text
                            ssmall
                            disabled={isPreviousButtonDisabled}
                            onClick={handlePreviousPage}
                        >
                            <i class="fa-solid fa-chevron-left"></i>
                        </Button>
                        {books !== null &&
                            Array.from({ length: books.lastPage }).map((_, index) =>
                                index + 1 === page ? (
                                    <Button key={index} className={cx('page-btn', { active: true })} text ssmall>
                                        {index + 1}
                                    </Button>
                                ) : (
                                    <Button
                                        key={index}
                                        className={cx('page-btn')}
                                        text
                                        ssmall
                                        onClick={() => setPage(index + 1)}
                                    >
                                        {index + 1}
                                    </Button>
                                ),
                            )}
                        <Button
                            className={cx('page-btn')}
                            text
                            ssmall
                            disabled={isNextButtonDisabled}
                            onClick={handleNextPage}
                        >
                            <i class="fa-solid fa-chevron-right"></i>
                        </Button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Category;
