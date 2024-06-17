import classNames from 'classnames/bind';
import styles from './SearchResult.module.scss';

const cx = classNames.bind(styles);

function SearchResult({ title, elements, image = null }) {
    return (
        <div className={cx('container')}>
            <div className={cx('search-result')}>
                <div className={cx('book')}>
                    <div className={cx('book-img')}>
                        <img
                            src="https://307a0e78.vws.vegacdn.vn/view/v2/image/img.book/0/0/0/28204.jpg?v=1&w=340&h=497"
                            alt="Nguyện ước tháng năm"
                        ></img>
                    </div>
                    <div className={cx('book-content')}>
                        <p className={cx('book-name')}>Nguyện ước tháng năm</p>
                        <i className={cx('book-author')}>Katherine Applegate</i>
                    </div>
                </div>
                <div className={cx('book')}>
                    <div className={cx('book-img')}>
                        <img
                            src="https://307a0e78.vws.vegacdn.vn/view/v2/image/img.book/0/0/0/28204.jpg?v=1&w=340&h=497"
                            alt="Nguyện ước tháng năm"
                        ></img>
                    </div>
                    <div className={cx('book-content')}>
                        <p className={cx('book-name')}>Nguyện ước tháng năm</p>
                        <i className={cx('book-author')}>Katherine Applegate</i>
                    </div>
                </div>
                <div className={cx('book')}>
                    <div className={cx('book-img')}>
                        <img
                            src="https://307a0e78.vws.vegacdn.vn/view/v2/image/img.book/0/0/0/28204.jpg?v=1&w=340&h=497"
                            alt="Nguyện ước tháng năm"
                        ></img>
                    </div>
                    <div className={cx('book-content')}>
                        <p className={cx('book-name')}>Nguyện ước tháng năm</p>
                        <i className={cx('book-author')}>Katherine Applegate</i>
                    </div>
                </div>
                <div className={cx('book')}>
                    <div className={cx('book-img')}>
                        <img
                            src="https://307a0e78.vws.vegacdn.vn/view/v2/image/img.book/0/0/0/28204.jpg?v=1&w=340&h=497"
                            alt="Nguyện ước tháng năm"
                        ></img>
                    </div>
                    <div className={cx('book-content')}>
                        <p className={cx('book-name')}>Nguyện ước tháng năm</p>
                        <i className={cx('book-author')}>Katherine Applegate</i>
                    </div>
                </div>
                <div className={cx('book')}>
                    <div className={cx('book-img')}>
                        <img
                            src="https://307a0e78.vws.vegacdn.vn/view/v2/image/img.book/0/0/0/28204.jpg?v=1&w=340&h=497"
                            alt="Nguyện ước tháng năm"
                        ></img>
                    </div>
                    <div className={cx('book-content')}>
                        <p className={cx('book-name')}>Nguyện ước tháng năm</p>
                        <i className={cx('book-author')}>Katherine Applegate</i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchResult;
