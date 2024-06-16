// import classNames from 'classnames/bind';
import React, { useState } from 'react';
// import styles from './Menu.module.scss';
// import { useSelector, useDispatch } from 'react-redux';
// import { setConcreteChapter } from '../../redux/chapterCurrent';
// const cx = classNames.bind(styles);

const chapter_not_is_number = [0, 99];

function SettingReading({ chapter_array }) {
    // const [isModalVisible, setIsModalVisible] = useState(true);
    // let chapterNumber = useSelector((state) => state.chapter.value);
    // const dispatch = useDispatch();

    // function isActive(index) {
    //     if (chapterNumber === index) return true;
    //     else return false;
    // }
    // const goToChapter = (index) => {
    //     dispatch(setConcreteChapter(index));
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth', // Smooth scrolling animation
    //     });
    // };

    return (
        <div>
            <div
                class="offcanvas offcanvas-end"
                tabindex="-1"
                id="readingSetting"
                aria-labelledby="offcanvasRightLabel"
            >
                <span>hi</span>
            </div>
        </div>
    );
}

export default SettingReading;
