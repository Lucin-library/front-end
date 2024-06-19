import classNames from 'classnames/bind';
import styles from './ManageAccount.module.scss';
import Button from '../../../../components/Button';
import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cx = classNames.bind(styles);

const ManageAccount = ({ user }) => {
    const [birthDay, setBirthDay] = useState('');
    const [name, setName] = useState('Duc Long');

    useEffect(() => {
        // Set default value if not already set
        if (!birthDay) {
            const defaultDate = new Date(2000, 0, 1); // Example: January 1, 2000
            const formattedDate = defaultDate.toISOString().split('T')[0];
            setBirthDay(formattedDate);
        }
    }, [birthDay]);
    const handleDateChange = (e) => {
        setBirthDay(e.target.value);
    };
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior
        const user = { name: name, age: '21', birthDay };
        localStorage.setItem('user', JSON.stringify(user));
        const message = 'update message suceesfully';
        toast.success(message, {
            position: 'top-center',
        });
    };

    return (
        <div className={cx('wrapper')}>
            <ToastContainer />
            <h1>Quản lý thông tin</h1>
            <form onSubmit={handleSubmit}>
                <div class="mb-3 row">
                    <label for="name" class="col-sm-2 col-form-label">
                        Họ và tên
                    </label>
                    <div class="col-sm-10">
                        <input
                            type="text"
                            class="form-control"
                            id="name"
                            onChange={handleNameChange}
                            value={user.name}
                            style={{ fontSize: '14px', height: '40px' }}
                        />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="dob" class="col-sm-2 col-form-label">
                        Ngày sinh
                    </label>
                    <div class="col-sm-10">
                        <input
                            type="date"
                            class="form-control"
                            value={birthDay}
                            id="dob"
                            style={{ fontSize: '14px', height: '40px' }}
                            onChange={handleDateChange}
                        />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">
                        Email
                    </label>
                    <div class="col-sm-10">
                        <input
                            type="text"
                            readonly
                            class="form-control-plaintext"
                            id="staticEmail"
                            value="duclong@gmail.com"
                        />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">
                        Password
                    </label>
                    <div class="col-sm-10">
                        <input
                            type="password"
                            class="form-control form-control-lg"
                            id="inputPassword"
                            value="123465"
                            style={{ fontSize: '14px', height: '40px' }}
                        />
                    </div>
                </div>
                <div className={cx('update-btn')}>
                    <Button>Hủy</Button>
                    <Button fullfill>Cập nhật</Button>
                </div>
            </form>
        </div>
    );
};

export default ManageAccount;
