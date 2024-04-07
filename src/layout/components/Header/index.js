import styles from './Header.module.scss';
import './style.css';
import classNames from 'classnames/bind';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Button from '../../../components/Button';
import Dropdown from '../Dropdown';

const cx = classNames.bind(styles);

function Header() {
    const array = [
        { name: 'Thu ha', href: '#' },
        { name: 'Thu ha', href: '#' },
        { name: 'Thu ha', href: '#' },
    ];
    const userOptions = [
        { name: 'Quản lý tài khoản', href: '#', icon: <i class="fa-solid fa-circle-user"></i> },
        { name: 'Sách đang đọc', href: '#', icon: <i class="fa-solid fa-book-open-reader"></i> },
        { name: 'Sách yêu thích', href: '#', icon: <i class="fa-solid fa-heart"></i> },
        { name: 'Hỗ trợ khach hàng', href: '#', icon: <i class="fa-solid fa-headset"></i> },
        { name: 'Đăng xuất', href: '#', icon: <i class="fa-solid fa-arrow-right-from-bracket"></i> },
    ];

    return (
        <header className={cx('wrapper')}>
            <section className={cx('top-header')}>
                <div className={cx('container')}>
                    <div class="row">
                        <div class="col-md-4 col-xs-12 col-sm-4">
                            <div className={cx('search-box')}>
                                <button className={cx('btn-search')}>
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </button>
                                <input type="text" className={cx('input-search')} placeholder="Type to Search..." />
                            </div>
                        </div>
                        <div class="col-md-4 col-xs-12 col-sm-4">
                            <div class="text-center" className={cx('logo')}>
                                <a href="#">LUCIN</a>
                            </div>
                        </div>
                        <div class="col-md-4 col-xs-12 col-sm-4">
                            <div class="top-menu text-right list-inline" className={cx('authen')}>
                                {/* <Button to="/login" small primary>
                                    Đăng nhập
                                </Button> */}
                                <Dropdown
                                    title="Tran Thi Thu Ha"
                                    elements={userOptions}
                                    image="https://devo.vn/wp-content/uploads/2023/01/soc-vai-meo.jpg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={cx('categories')}>
                <div class="container" className={cx('navigation')}>
                    <div class="nav-option">
                        <a href="#">Trang chủ</a>
                    </div>
                    <Dropdown title="Thể loại" elements={array} />
                    <Dropdown title="Văn học" elements={array} />
                    <Dropdown title="Khoa học - Công nghệ" elements={array} />
                </div>
            </section>
        </header>
    );
}

export default Header;
