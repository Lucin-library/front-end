import Button from '../../../../components/Button';
import styles from './Support.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Support() {
    return (
        <div className={cx('wrapper')}>
            <h1>Bạn cần hỗ trợ?</h1>
            <p>Liên hệ chúng tôi thông qua các kênh hỗ trợ</p>
            <div className={cx('group-btn')}>
                <Button leftIcon={<i class="fa-brands fa-facebook-messenger"></i>} className={cx('btn')} primary>
                    Messenger
                </Button>
                <Button leftIcon={<i class="fa-brands fa-instagram"></i>} className={cx('btn')} primary>
                    Instagram
                </Button>
                <p>Hoặc</p>
                <Button leftIcon={<i class="fa-solid fa-phone"></i>} className={cx('btn')} primary>
                    Hotline 0123456789
                </Button>
                <Button leftIcon={<i class="fa-solid fa-envelope"></i>} className={cx('btn')} primary>
                    Email support@lucin.vn
                </Button>
            </div>
        </div>
    );
}

export default Support;
