import classNames from 'classnames/bind';
import styles from './Book.module.scss';
import Button from '../../../components/Button';

const cx = classNames.bind(styles);

function Book({ book }) {
    return (
        <div class="col-md-3">
            <div className={cx('card')}>
                <div className={cx('imgBox')}>
                    <img src={book.cover_image_url} className={cx('book')} alt={book.title} />
                </div>

                <div className={cx('contentBox')}>
                    <h3>{book.title}</h3>
                    <Button href={`/details/${book.id}`} defaultBtn className={cx('read')}>
                        Xem
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Book;
