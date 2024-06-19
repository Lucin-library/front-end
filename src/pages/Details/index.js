import styles from './Details.module.scss';
import classNames from 'classnames/bind';
import Button from '../../components/Button';
import images from '../../assets/image';
import { datas } from '../../components/Datas';
import SlideShow from '../../components/Slideshow';
import { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import { useDispatch } from 'react-redux';
import { turnOn, turnOff } from '../../redux/loading';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Details() {
    const [state, setState] = useState(true);
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
        <>
            <ToastContainer />
            <div className={cx('wrapper')}>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div className={cx('details')}>
                                <div className={cx('image')}>
                                    <img
                                        src="https://307a0e78.vws.vegacdn.vn/view/v2/image/img.book/0/0/0/10990.jpg?v=2&w=480&h=700"
                                        alt=""
                                    />
                                </div>
                                <div className={cx('information')}>
                                    <h2>Đắc nhân tâm</h2>
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
                                            3125 đánh giá
                                        </div>
                                    </div>
                                    <div className={cx('label')}>
                                        Tác giả
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
                                    <img src="https://devo.vn/wp-content/uploads/2023/01/soc-vai-meo.jpg" />
                                    <label className={cx('input')}>
                                        <input
                                            className={cx('input__field')}
                                            type="text"
                                            placeholder=" "
                                            // value={state}
                                            onChange={handleComment}
                                        />
                                        <span className={cx('input__label')}>Bạn thấy thế nào?</span>
                                    </label>
                                    <div className={cx('user-cmt-action')}>
                                        <Button defaultBtn small onClick={handleClickSubmitComment}>
                                            Bình luận
                                        </Button>
                                    </div>
                                </div>

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
                                        Xem thêm
                                    </Button>
                                    {oldComment && <div>Loading...</div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <SlideShow datas={datas} title="Có thể bạn cũng thích" />
                <SlideShow datas={datas} title="Cùng tác giả" />
            </div>
        </>
    );
}

export default Details;
