import styles from './Details.module.scss';
import classNames from 'classnames/bind';
import Button from '../../components/Button';
import images from '../../assets/image';
import SlideShow from '../../components/Slideshow';
<<<<<<< HEAD
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { bookApi } from '../../api/book';
=======
import { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import { useDispatch } from 'react-redux';
import { turnOn, turnOff } from '../../redux/loading';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
>>>>>>> main

const cx = classNames.bind(styles);

function Details() {
    let { id } = useParams();
    const [state, setState] = useState(true);
<<<<<<< HEAD
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
=======
    const [loadingComment, setLoadingCommnet] = useState(false);
    const [already, setAlready] = useState(false);
    const [commentInput, setCommentInput] = useState('');
    const [comments, setComments] = useState([]);
    const [oldComment, setOldComment] = useState(false);
    const [favoriteStatus, setFavoriteStatus] = useState(false);
    const navigate = useNavigate();
    const data = [
        {
            user: 'Đức Long',
            comment:
                'sách cũ nhưng phương pháp còn hiệu lực cho đến ngày nay, hãy kiên nhẫn và cố gắng đọc đi đọc lại, bạn sẽ ngộ ra.',
            time: '7 giờ trước',
        },
        {
            user: 'Thu Hà',
            comment: 'Câu chuyện rất cũ nhưng vẫn còn giá trị cho đến ngày nay, nỗi sợ hãi, lòng tham, cảm xúc ...',
            time: '6 giờ trước',
        },
        {
            user: 'Thu Hà',
            comment: 'Một số lỗi chính tả, một số trích dẫn lặp lại, nhưng dù sao cũng đầy đủ thông tin!',
            time: '6 giờ trước',
        },
        {
            user: 'Thu Hà',
            comment: 'Khó đánh giá.',
            time: '6 giờ trước',
        },
    ];

>>>>>>> main
    const handleComment = (event) => {
        const newValue = event.target.value;
        setState(newValue);
    };
    const handleClickSubmitComment = () => {
        setLoadingCommnet(true);
        setState('');
        setTimeout(() => {
            setLoadingCommnet(false);
            setAlready(true);
        }, 1000);
    };
    const loadingOldComment = () => {
        const oldComment = [
            {
                user: 'Thu Hà',
                comment: 'Câu chuyện này thực sự làm tôi suy nghĩ rất nhiều về cuộc sống.',
                time: '6 giờ trước',
            },
            {
                user: 'Thu Hà',
                comment: 'Những chi tiết nhỏ trong câu chuyện thật sự ấn tượng và đáng nhớ.',
                time: '6 giờ trước',
            },
            {
                user: 'Thu Hà',
                comment: 'Tác phẩm này mang lại cho tôi nhiều cảm xúc trái ngược.',
                time: '6 giờ trước',
            },
            {
                user: 'Thu Hà',
                comment: 'Đọc xong, tôi cảm thấy cần phải suy nghĩ và cân nhắc về nhiều điều.',
                time: '6 giờ trước',
            },
        ];
        setOldComment(true);
        setTimeout(() => {
            setComments((prevArray) => [...prevArray, ...oldComment]);
            setOldComment(false);
        }, 1000);
    };
    useEffect(() => {
        setComments(data);
    }, []);

    const favorite = () => {
        setFavoriteStatus(true);
        toast.success('Add to favorite list successfully', {
            position: 'top-center',
        });
    };

    return (
<<<<<<< HEAD
        <div className={cx('wrapper')}>
            {book !== null && (
=======
        <>
            <ToastContainer />
            <div className={cx('wrapper')}>
>>>>>>> main
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div className={cx('details')}>
                                <div className={cx('image')}>
<<<<<<< HEAD
                                    <img src={book.book.cover_image_url} alt={book.book.title} />
                                </div>
                                <div className={cx('information')}>
                                    <h2>{book.book.title}</h2>
=======
                                    <img
                                        src="https://307a0e78.vws.vegacdn.vn/view/v2/image/img.book/0/0/0/10990.jpg?v=2&w=480&h=700"
                                        alt=""
                                    />
                                </div>
                                <div className={cx('information')}>
                                    <h2>Đắc nhân tâm</h2>
>>>>>>> main
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
<<<<<<< HEAD
                                            {book.totalRatings} đánh giá
=======
                                            3125 đánh giá
>>>>>>> main
                                        </div>
                                    </div>
                                    <div className={cx('label')}>
                                        Tác giả
<<<<<<< HEAD
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
=======
                                        <p>Dale Carnegie</p>
                                    </div>
                                    <div className={cx('label')}>
                                        Thể loại
                                        <p>Phát triển cá nhân</p>
                                    </div>
                                    <div className={cx('label')}>
                                        Nhà xuất bản
                                        <p>NXB Trẻ</p>
                                    </div>
                                    <div className={cx('description')}>
                                        <i>
                                            Đắc Nhân Tâm là cuốn sách đưa ra các lời khuyên về cách thức cư xử, ứng xử
                                            và giao tiếp với mọi người để đạt được thành công trong cuộc sống. Gần 80
                                            năm kể từ khi ra đời, Đắc Nhân Tâm là cuốn sách gối đầu giường của nhiều thế
                                            hệ luôn muốn hoàn thiện chính mình để vươn tới một cuộc sống tốt đẹp và
                                            thành công. Đắc Nhân Tâm cụ thể và chi tiết với những chỉ dẫn để dẫn đạo
                                            người, để gây thiện cảm và dẫn dắt người khác,... những hướng dẫn ấy, qua
                                            thời gian, có thể không còn thích hợp trong cuộc sống hiện đại nhưng nếu
                                            người đọc có thể cảm và hiểu được những thông điệp tác giả muốn truyền đạt
                                            thì việc áp dụng nó vào cuộc sống trở nên dễ dàng và hiệu quả.
                                        </i>
                                    </div>
                                    <div className={cx('button')}>
                                        <Button
                                            leftIcon={<i class="fa-solid fa-book-open"></i>}
                                            primary
                                            large
                                            onClick={() => navigate('/read')}
                                        >
                                            Đọc sách
                                        </Button>
                                        <Button
                                            leftIcon={<i class="fa-regular fa-heart"></i>}
                                            defaultBtn
                                            large
                                            style={
                                                favoriteStatus ? { backgroundColor: '#faa06cf9', color: 'white' } : {}
                                            }
                                            onClick={() => favorite()}
                                        >
>>>>>>> main
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
<<<<<<< HEAD
                                    <img src={images.user} />
=======
                                    <img src="https://devo.vn/wp-content/uploads/2023/01/soc-vai-meo.jpg" />
>>>>>>> main
                                    <label className={cx('input')}>
                                        <input
                                            className={cx('input__field')}
                                            type="text"
                                            placeholder=" "
<<<<<<< HEAD
=======
                                            // value={state}
>>>>>>> main
                                            onChange={handleComment}
                                        />
                                        <span className={cx('input__label')}>Bạn thấy thế nào?</span>
                                    </label>
                                    <div className={cx('user-cmt-action')}>
<<<<<<< HEAD
                                        <Button defaultBtn small disabled={state}>
=======
                                        <Button defaultBtn small onClick={handleClickSubmitComment}>
>>>>>>> main
                                            Bình luận
                                        </Button>
                                    </div>
                                </div>
<<<<<<< HEAD
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
=======

                                {loadingComment ? <div>Loading...</div> : <></>}
                                {already ? (
                                    <div className={cx('comments')}>
                                        <div className={cx('comment')}>
                                            <div className={cx('user')}>
                                                <div className={cx('user-info')}>
                                                    <img
                                                        src={
                                                            'https://devo.vn/wp-content/uploads/2023/01/soc-vai-meo.jpg'
                                                        }
                                                    />
                                                    <h4>Long Nguyen</h4>
                                                </div>
                                                <i>now</i>
                                            </div>
                                            <p className={cx('cmt')}>{'Tuyệt vời'}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <></>
                                )}
                                {comments.map((item, index) => (
                                    <div className={cx('comments')}>
                                        <div className={cx('comment')}>
                                            <div className={cx('user')}>
                                                <div className={cx('user-info')}>
                                                    <img src={images.user} />
                                                    <h4>{item.user}</h4>
                                                </div>
                                                <i>{item.time}</i>
                                            </div>
                                            <p className={cx('cmt')}>{item.comment}</p>
                                        </div>
                                    </div>
                                ))}

                                <div className={cx('btn-cmt')}>
                                    <Button
                                        leftIcon={<i class="fa-solid fa-plus"></i>}
                                        primary
                                        onClick={() => loadingOldComment()}
                                    >
>>>>>>> main
                                        Xem thêm
                                    </Button>
                                    {oldComment && <div>Loading...</div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
<<<<<<< HEAD
            )}
            {rcmBook !== null && <SlideShow datas={rcmBook} title="Có thể bạn cũng thích" />}
            {rcmBookByAuthor !== null && <SlideShow datas={rcmBookByAuthor} title="Cùng tác giả" />}
        </div>
=======
                <SlideShow datas={datas} title="Có thể bạn cũng thích" />
                <SlideShow datas={datas} title="Cùng tác giả" />
            </div>
        </>
>>>>>>> main
    );
}

export default Details;
