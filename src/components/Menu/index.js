import classNames from 'classnames/bind';
import React, { useState } from 'react';
import styles from './Menu.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setConcreteChapter } from '../../redux/chapterCurrent';
const cx = classNames.bind(styles);

const chapter_not_is_number = [0, 99];

function Menu({ chapter_array }) {
    const [isModalVisible, setIsModalVisible] = useState(true);
    let chapterNumber = useSelector((state) => state.chapter.value);
    const dispatch = useDispatch();

    function isActive(index) {
        if (chapterNumber === index) return true;
        else return false;
    }
    const goToChapter = (index) => {
        dispatch(setConcreteChapter(index));
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling animation
        });
    };

    return (
        <div className={cx('wrapper')}>
            <div
                class="offcanvas offcanvas-end"
                tabindex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
            >
                <div class="offcanvas-header">
                    <h1 id="offcanvasRightLabel">Danh sách</h1>
                    <button
                        type="button"
                        class="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="offcanvas-body">
                    <div className={cx('option')}>
                        <div
                            class="filter-title"
                            data-bs-toggle="collapse"
                            href="#collapseChapters"
                            role="button"
                            onclick="handleRotate()"
                        >
                            <p>Mục lục</p>
                        </div>
                        <hr />
                        <div class="collapse content-item-filter mausac" id="collapseChapters">
                            <div className={cx('list')}>
                                {chapter_array.map((item, index) => (
                                    <div
                                        className={cx('list-item', isActive(index) ? 'active' : 'un-active')}
                                        onClick={() => goToChapter(index)}
                                    >
                                        <p key={index}>
                                            {chapter_not_is_number.indexOf(item.chapter_number) === -1 ? (
                                                <span>
                                                    Chương {item.chapter_number}: {item.title}
                                                </span>
                                            ) : (
                                                <span>{item.title}</span>
                                            )}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={cx('option')}>
                        <div
                            class="filter-title"
                            data-bs-toggle="collapse"
                            href="#collapseBm"
                            role="button"
                            onclick="handleRotate()"
                        >
                            <p>Dấu trang</p>
                        </div>
                        <hr />
                        <div class="collapse content-item-filter mausac" id="collapseBm">
                            <div className={cx('none-bookmark')}>
                                <div className={cx('bm-logo')}>
                                    <i class="fa-regular fa-bookmark"></i>
                                </div>
                                <strong>Bạn chưa có dấu trang nào</strong>
                                <p>Các trang bạn đánh dấu sẽ hiện tại đây.</p>
                                <p>Vui lòng nhấn nút dấu trang để lưu.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
