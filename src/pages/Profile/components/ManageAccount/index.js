import classNames from 'classnames/bind';
import styles from './ManageAccount.module.scss';
import Button from '../../../../components/Button';

const cx = classNames.bind(styles);

function ManageAccount() {
    return (
        <div className={cx('wrapper')}>
            <h1>Quản lý thông tin</h1>
            <form>
                <div class="mb-3 row">
                    <label for="name" class="col-sm-2 col-form-label">
                        Họ và tên
                    </label>
                    <div class="col-sm-10">
                        <input
                            type="text"
                            class="form-control"
                            id="name"
                            style={{ fontSize: '14px', height: '40px' }}
                        />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="dob" class="col-sm-2 col-form-label">
                        Ngày sinh
                    </label>
                    <div class="col-sm-10">
                        <input type="date" class="form-control" id="dob" style={{ fontSize: '14px', height: '40px' }} />
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
                            value="email@example.com"
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
}

export default ManageAccount;
