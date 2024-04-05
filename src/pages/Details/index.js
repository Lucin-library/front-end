import styles from './Details.module.scss';
import classNames from 'classnames/bind';
import Button from '../../components/Button';
import images from '../../assets/image';
import { datas } from '../../components/Datas';
import SlideShow from '../../components/Slideshow';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Details() {
    const [state, setState] = useState(true);

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
                                        Đắc Nhân Tâm là cuốn sách đưa ra các lời khuyên về cách thức cư xử, ứng xử và
                                        giao tiếp với mọi người để đạt được thành công trong cuộc sống. Gần 80 năm kể từ
                                        khi ra đời, Đắc Nhân Tâm là cuốn sách gối đầu giường của nhiều thế hệ luôn muốn
                                        hoàn thiện chính mình để vươn tới một cuộc sống tốt đẹp và thành công. Đắc Nhân
                                        Tâm cụ thể và chi tiết với những chỉ dẫn để dẫn đạo người, để gây thiện cảm và
                                        dẫn dắt người khác,... những hướng dẫn ấy, qua thời gian, có thể không còn thích
                                        hợp trong cuộc sống hiện đại nhưng nếu người đọc có thể cảm và hiểu được những
                                        thông điệp tác giả muốn truyền đạt thì việc áp dụng nó vào cuộc sống trở nên dễ
                                        dàng và hiệu quả.
                                    </i>
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
            <SlideShow datas={datas} title="Có thể bạn cũng thích" />
            <SlideShow datas={datas} title="Cùng tác giả" />
        </div>
    );
}

export default Details;
