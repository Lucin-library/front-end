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
        </div>
    );
}

export default BookList;
