import classNames from 'classnames/bind';
import styles from './BookList.module.scss';
import Book from '../Book';

const cx = classNames.bind(styles);

function BookList({ books }) {
    return (
        <div class="container">
            <div class="row">
                {books.map((book) => (
                    <Book book={book} />
                ))}
            </div>
            <div className={cx('paginate')}>
                <nav aria-label="Page navigation example">
                    <ul class="pagination pagination-lg justify-content-end">
                        <li class="page-item disabled">
                            <a class="page-link" href="#" tabindex="-1">
                                Previous
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">
                                1
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link active" href="#">
                                2
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">
                                3
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">
                                Next
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default BookList;
