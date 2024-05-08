import styles from './Details.module.scss';
import classNames from 'classnames/bind';
import Button from '../../components/Button';
import images from '../../assets/image';
import SlideShow from '../../components/Slideshow';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { bookApi } from '../../api/book';

const cx = classNames.bind(styles);

function Details() {
    let { id } = useParams();
    const [state, setState] = useState(true);
    const [book, setBooks] = useState(null);
    const [rcmBook, setRcmBook] = useState([]);
    const [rcmBookByAuthor, setRcmBookByAuthor] = useState([]);
    useEffect(() => {
        bookApi
            .getDetails({ id })
            .then((data) => setBooks(data.data))
            .catch((err) => console.log(err));
        window.scrollTo(0, 0);
    }, [id]);
    useEffect(() => {
        if (book !== null) {
            bookApi
                .getRecommendByGenre({ genre: book.book.genre })
                .then((data) => setRcmBook(data.data.books))
                .catch((err) => console.log(err));
            bookApi
                .getRecommendByAuthor({ id: book.author.id })
                .then((data) => setRcmBookByAuthor(data.data))
                .catch((err) => console.log(err));
            window.scrollTo(0, 0);
        }
    }, [book]);
    const handleComment = (event) => {
        const newValue = event.target.value;
        if (newValue.trim() !== '') {
            setState(false);
        } else {
            setState(true);
        }
    };

    return (
        <div className={cx('wrapper')}>
            {book !== null && (
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div className={cx('details')}>
                                <div className={cx('image')}>
                                    <img src={book.book.cover_image_url} alt={book.book.title} />
                                </div>
                                <div className={cx('information')}>
                                    <h2>{book.book.title}</h2>
                                    <div className={cx('votes')}>
                                        <div className={cx('vote-left')}>
                                            <span className={cx('scores')}>5.0</span>
                                            <div className={cx('stars')}>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                            </div>
                                        </div>
                                        <div className={cx('vote-right')}>
                                            <span>・</span>
                                            {book.totalRatings} đánh giá
                                        </div>
                                    </div>
                                    <div className={cx('label')}>
                                        Tác giả
                                        <p>{book.author.name}</p>
                                    </div>
                                    <div className={cx('label')}>
                                        Thể loại
                                        <p>{book.book.genre}</p>
                                    </div>
                                    <div className={cx('label')}>
                                        Nhà xuất bản
                                        <p>{book.book.publisher}</p>
                                    </div>
                                    <div className={cx('description')}>
                                        <i>{book.book.description}</i>
                                    </div>
                                    <div className={cx('button')}>
                                        <Button leftIcon={<i class="fa-solid fa-book-open"></i>} primary large>
                                            Đọc sách
                                        </Button>
                                        <Button leftIcon={<i class="fa-regular fa-heart"></i>} defaultBtn large>
                                            Yêu thích
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div className={cx('feedback')}>
                                <h2>
                                    Nhận xét (25) <hr />
                                </h2>
                                <div className={cx('user-cmt')}>
                                    <img src={images.user} />
                                    <label className={cx('input')}>
                                        <input
                                            className={cx('input__field')}
                                            type="text"
                                            placeholder=" "
                                            onChange={handleComment}
                                        />
                                        <span className={cx('input__label')}>Bạn thấy thế nào?</span>
                                    </label>
                                    <div className={cx('user-cmt-action')}>
                                        <Button defaultBtn small disabled={state}>
                                            Bình luận
                                        </Button>
                                    </div>
                                </div>
                                <div className={cx('comments')}>
                                    <div className={cx('comment')}>
                                        <div className={cx('user')}>
                                            <div className={cx('user-info')}>
                                                <img src={images.user} />
                                                <h4>thuhadev</h4>
                                            </div>
                                            <i>7 giờ trước</i>
                                        </div>
                                        <p className={cx('cmt')}>Thu hà xinh đẹp tuyệt vời :3</p>
                                    </div>
                                    <div className={cx('comment')}>
                                        <div className={cx('user')}>
                                            <div className={cx('user-info')}>
                                                <img src={images.user} />
                                                <h4>thuhadev</h4>
                                            </div>
                                            <i>7 giờ trước</i>
                                        </div>
                                        <p className={cx('cmt')}>Thu hà xinh đẹp tuyệt vời :3</p>
                                    </div>
                                    <div className={cx('comment')}>
                                        <div className={cx('user')}>
                                            <div className={cx('user-info')}>
                                                <img src={images.user} />
                                                <h4>thuhadev</h4>
                                            </div>
                                            <i>7 giờ trước</i>
                                        </div>
                                        <p className={cx('cmt')}>Thu hà xinh đẹp tuyệt vời :3</p>
                                    </div>
                                    <div className={cx('comment')}>
                                        <div className={cx('user')}>
                                            <div className={cx('user-info')}>
                                                <img src={images.user} />
                                                <h4>thuhadev</h4>
                                            </div>
                                            <i>7 giờ trước</i>
                                        </div>
                                        <p className={cx('cmt')}>Thu hà xinh đẹp tuyệt vời :3</p>
                                    </div>
                                </div>
                                <div className={cx('btn-cmt')}>
                                    <Button leftIcon={<i class="fa-solid fa-plus"></i>} primary>
                                        Xem thêm
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {rcmBook !== null && <SlideShow datas={rcmBook} title="Có thể bạn cũng thích" />}
            {rcmBookByAuthor !== null && <SlideShow datas={rcmBookByAuthor} title="Cùng tác giả" />}
        </div>
    );
}

export default Details;
