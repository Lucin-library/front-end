import Button from '../../components/Button';
import ManageAccount from './components/ManageAccount';
import Books from './components/Books';
import Support from './components/Support';

import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function Profile() {
    const [active, setActive] = useState('manage');
    const [user, setUser] = useState({});

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className={cx('left')}>
                        <div className={cx('user')}>
                            <img src="https://devo.vn/wp-content/uploads/2023/01/soc-vai-meo.jpg" alt="" />
                            <p>Tran Thi Thu Ha</p>
                        </div>
                        <hr />
                        <div className={cx('options')}>
                            <Button
                                className={cx('option-btn', { active: active === 'manage' })}
                                leftIcon={<i class="fa-solid fa-circle-user"></i>}
                                onClick={() => setActive('manage')}
                            >
                                Quản lý tài khoản
                            </Button>
                            <Button
                                className={cx('option-btn', { active: active === 'reading' })}
                                leftIcon={<i class="fa-solid fa-book-open-reader"></i>}
                                onClick={() => setActive('reading')}
                            >
                                Sách đang đọc
                            </Button>
                            <Button
                                className={cx('option-btn', { active: active === 'favorite' })}
                                leftIcon={<i class="fa-solid fa-heart"></i>}
                                onClick={() => setActive('favorite')}
                            >
                                Sách yêu thích
                            </Button>

                            <Button
                                className={cx('option-btn', { active: active === 'support' })}
                                leftIcon={<i class="fa-solid fa-headset"></i>}
                                onClick={() => setActive('support')}
                            >
                                Hỗ trợ khách hàng
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className={cx('right')}>
                        {active === 'manage' && <ManageAccount user={user} />}
                        {active === 'reading' && <Books />}
                        {active === 'favorite' && <Books />}
                        {active === 'support' && <Support />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
