import Button from '../../components/Button';
import Menu from '../../components/Menu';

import classNames from 'classnames/bind';
import styles from './Reading.module.scss';
import { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import data from './data.json';
import { useDispatch, useSelector } from 'react-redux';
import { setNextChapterNumber, setPreviousChapter } from '../../redux/chapterCurrent';
import HeaderReading from './HeaderReading';

const cx = classNames.bind(styles);

const renderContent = (content) => {
    if (typeof content[0] == 'string') return parse(content[0]); // Phân tích chuỗi HTML và render ra JSX
    else return '<h1> Không có nội dung</h1>';
    // Tính chỉ số bắt đầu và chỉ số kết thúc của nội dung trên trang hiện tại
};

function Reading() {
    const [state, setState] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const dispatch = useDispatch();

    const chapterNumber = useSelector((state) => state.chapter.value);
    const chapter_array = [];
    const content_array = [];
    let currentChapter = null;

    data.map((item) => chapter_array.push({ title: item.title, chapter_number: item.chapter_number }));
    data.map((item, index) =>
        content_array.push({
            title: item.chapter_number,
            content: item.contents.map((content_item) => content_item.content),
        }),
    );
    currentChapter = content_array[chapterNumber].content;
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const nextChapter = () => {
        dispatch(setNextChapterNumber());
    };
    const previousChapter = () => {
        dispatch(setPreviousChapter());
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling animation
        });
    };

    return (
        <>
            <HeaderReading></HeaderReading>
            <div className={cx('wrapper')}>
                <div className={cx('menu')}>
                    {/* <div className={cx('actions')}>
                        {state ? (
                            <Button leftIcon={<i class="fa-solid fa-bookmark"></i>} onClick={handleBookmark} />
                        ) : (
                            <Button leftIcon={<i class="fa-regular fa-bookmark"></i>} onClick={handleBookmark} />
                        )}
                    </div> */}
                </div>

                <article>{renderContent(currentChapter)}</article>
                <div className={cx('nav-chapter')}>
                    <Button className={cx('prev-btn')} onClick={previousChapter} disabled={chapterNumber === 0}>
                        Chương trước
                    </Button>
                    <Button
                        className={cx('next-btn')}
                        onClick={nextChapter}
                        disabled={chapterNumber === data.length - 1}
                    >
                        Chương sau
                    </Button>
                </div>
                {isVisible && (
                    <Button className={cx('float-btn')} onClick={scrollToTop}>
                        <i class="fa-solid fa-arrow-up"></i>
                    </Button>
                )}
            </div>
            <Menu chapter_array={chapter_array} />
        </>
    );
}

export default Reading;
