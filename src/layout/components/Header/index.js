import styles from './Header.module.scss';
import './style.css';
import classNames from 'classnames/bind';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import SearchResult from '../SearchResult';
import Dropdown from '../Dropdown';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header() {
    const [user, setUser] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const isLogin = localStorage.getItem('isLogin');
        if (isLogin === 'true') {
            setUser('Long Nguyen');
        } else {
            setUser(null);
        }
    }, []);

    const array1 = [
        { name: 'Kinh Dị' },
        { name: 'Trinh Thám' },
        { name: 'Tình Cảm' },
        { name: 'Phiêu Lưu' },
        { name: 'Hài Hước' },
        { name: 'Lịch Sử' },
    ];
    const array2 = [
        { name: 'Tiểu Thuyết' },
        { name: 'Truyện Ngắn' },
        { name: 'Tiểu Luận' },
        { name: 'Thơ' },
        { name: 'Kịch' },
        { name: 'Hồi Ký' },
    ];
    const array3 = [
        { name: 'Trí tuệ Nhân tạo' },
        { name: 'Công nghệ Thông tin' },
        { name: 'Y học' },
        { name: 'Kỹ thuật Y sinh' },
        { name: 'Xã hội học' },
        { name: 'Kinh tế học' },
    ];
    const userOptions = [
        { name: 'Quản lý tài khoản', icon: <i class="fa-solid fa-circle-user"></i> },
        { name: 'Sách đang đọc', icon: <i class="fa-solid fa-book-open-reader"></i> },
        { name: 'Sách yêu thích', icon: <i class="fa-solid fa-heart"></i> },
        { name: 'Hỗ trợ khach hàng', icon: <i class="fa-solid fa-headset"></i> },
        { name: 'Đăng xuất', icon: <i class="fa-solid fa-arrow-right-from-bracket"></i> },
    ];

    return (
        <header className={cx('wrapper')}>
            <section className={cx('top-header')}>
                <div className={cx('container')}>
                    <div class="row">
                        <div class="col-md-4 col-xs-12 col-sm-4">
                            <div className={cx('search')}>
                                <div className={cx('search-box')}>
                                    <button className={cx('btn-search')}>
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </button>
                                    <input type="text" className={cx('input-search')} placeholder="Type to Search..." />
                                </div>
                                <SearchResult />
                            </div>
                        </div>
                        <div class="col-md-4 col-xs-12 col-sm-4">
                            <div class="text-center" className={cx('logo')}>
                                <a href="#">LUCIN</a>
                            </div>
                        </div>
                        <div class="col-md-4 col-xs-12 col-sm-4">
                            <div class="top-menu text-right list-inline" className={cx('authen')}>
                                {user ? (
                                    <Dropdown
                                        title={user}
                                        elements={userOptions}
                                        image="https://devo.vn/wp-content/uploads/2023/01/soc-vai-meo.jpg"
                                    />
                                ) : (
                                    <Button to="/login" small primary style={{ cursor: 'pointer' }}>
                                        Đăng nhập
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={cx('categories')}>
                <div class="container" className={cx('navigation')}>
                    <div class="nav-option">
                        <a href="/">Trang chủ</a>
                    </div>
                    <Dropdown title="Thể loại" elements={genres} />
                </div>
            </section>
        </header>
    );
}

export default Header;
