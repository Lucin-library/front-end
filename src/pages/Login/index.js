import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { useState } from 'react';
import { authApi } from '../../api/auth';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';
import Loading from '../../components/Loading';

const cx = classNames.bind(styles);

function Login() {
    const [state, setState] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        localStorage.setItem('isLogin', true);
        setEmail('');
        setPassword('');
        setLoading(true);
        setTimeout(() => {
            navigate('/', { replace: true });
            setLoading(false);
        }, 2000);
    };
    if (loading === true) {
        return <Loading />;
    }

    return (
        <div className={cx('container', { rightactive: state })} id="container">
            <div className={cx('form-container', 'sign-up-container')}>
                <form action="" method="">
                    <h1>Đăng kí</h1>
                    <input
                        type="text"
                        placeholder="Tài khoản"
                        name="username"
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input type="password" placeholder="Mật khẩu" name="password" value="" required />
                    <input type="text" placeholder="Họ tên" name="name" value="" required />
                    <div className={cx('input-container')}>
                        <label>
                            <input name="gender" type="radio" value="Nam" /> Nam
                        </label>
                        <label>
                            <input name="gender" type="radio" value="Nữ" /> Nữ
                        </label>
                        <label>
                            <input name="gender" type="radio" value="Khác" /> Khác
                        </label>
                    </div>
                    <input type="text" placeholder="Ngày sinh" name="dob" value="" required />
                    <input type="text" placeholder="Số điện thoại" name="sdt" value="" required />
                    <input type="email" placeholder="Mail" name="gmail" value="" required />
                    <div id="error"></div>
                    <Button type="submit" large fullfill>
                        Đăng kí
                    </Button>
                </form>
            </div>
            <div className={cx('form-container', 'sign-in-container')}>
                <form action="" method="" onSubmit={handleSubmit}>
                    <h1>Đăng nhập</h1>
                    <div className={cx('social-container')}>
                        <a href="" className={cx('social')}>
                            <i class="fa-brands fa-google"></i>
                        </a>
                        <a href="" className={cx('social')}>
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="" className={cx('social')}>
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                    </div>
                    <span>Hoặc đăng nhập với tài khoản khác</span>
                    <input
                        type="text"
                        placeholder="Tài khoản"
                        name="username"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Mật khẩu"
                        name="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <a className={cx('forget')} href="#">
                        Quên mật khẩu?
                    </a>
                    <Button type="submit" large fullfill>
                        Đăng nhập
                    </Button>
                </form>
            </div>
            <div className={cx('overlay-container')}>
                <div className={cx('overlay')}>
                    <div className={cx('overlay-panel', 'overlay-left')}>
                        <h1>Mừng trở lại!</h1>
                        <p>Để duy trì kết nối với chúng tôi vui lòng đăng nhập bằng thông tin cá nhân của bạn</p>
                        <button className={cx('ghost')} id="signIn" onClick={() => setState(false)}>
                            Đăng nhập
                        </button>
                    </div>
                    <div className={cx('overlay-panel', 'overlay-right')}>
                        <h1>Xin chào!</h1>
                        <p>Nhập thông tin cá nhân của bạn và bắt đầu hành trình với chúng tôi</p>
                        <button className={cx('ghost')} id="signUp" onClick={() => setState(true)}>
                            Đăng kí
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
