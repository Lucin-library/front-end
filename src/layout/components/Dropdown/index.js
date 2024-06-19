import { useNavigate } from 'react-router-dom';
import './index.css';
import { useState } from 'react';

function Dropdown({ title, elements, image = null }) {
    const [user, setUser] = useState({ name: 'Long Nguyen', age: '21', birthDay: '03-17-2002' });
    const navigate = useNavigate();
    function handleClick(name) {
        if (name === 'Đăng xuất') {
            localStorage.setItem('isLogin', false);
            window.location.href = window.location.href;
        }
        if (name === 'Quản lý tài khoản') {
            if (user.name || user.age) {
                localStorage.setItem('user', JSON.stringify(user));
            }
            navigate('/profile');
        }
        if (name === 'Tình Cảm') {
            navigate('/category');
        }
    }
    return (
        <div class="dropdown-center nav-option">
            <a class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" href="#">
                {title}
                {image !== null && <img src={image} alt="" />}
                <span class="tf-ion-ios-arrow-down"></span>
            </a>
            <div class="dropdown-menu">
                <div class="row">
                    <div class="col-lg-12">
                        <ul>
                            {elements.map((el) => (
                                <li onClick={() => handleClick(el.name)} style={{ cursor: 'pointer' }}>
                                    <a href={el.href}>
                                        {el.icon}
                                        {el.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dropdown;
