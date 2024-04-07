import BookList from '../../../../layout/components/BookList';
import { datas } from '../../../../components/Datas';

import classNames from 'classnames/bind';
import styles from './Books.module.scss';
import './index.css';

const cx = classNames.bind(styles);

function Books() {
    return (
        <div className={cx('wrapper')}>
            <div className="row">
                {datas.map((book) => (
                    <div className="col-md-3">
                        <div className={cx('book')}>
                            <div className={cx('img')}>
                                <img src={book.image} alt={book.name} />
                                <div className={cx('read-btn')}>
                                    <img src="https://waka.vn/svgs/icon-continue-read.svg" alt="" />
                                </div>
                                <div class="progress" style={{ height: '4px' }}>
                                    <div
                                        class="progress-bar bg-info"
                                        role="progressbar"
                                        style={{ width: '25%' }}
                                        aria-valuenow="25"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                            </div>

                            <p>{book.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Books;
