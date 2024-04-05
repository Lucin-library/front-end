import classNames from 'classnames/bind';
import styles from './Book.module.scss';
import Button from '../../../components/Button';

const cx = classNames.bind(styles);

function Book({ book }) {
    return (
        <div class="col-md-3">
            <div className={cx('card')}>
                <div className={cx('imgBox')}>
                    <img src={book.image} className={cx('book')} />
                </div>

                <div className={cx('contentBox')}>
                    <h3>{book.name}</h3>
                    <Button defaultBtn className={cx('read')}>
                        Đọc ngay
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Book;
