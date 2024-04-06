import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu() {
    return (
        <div className={cx('wrapper')}>
            <div data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <i class="fa-solid fa-bars"></i>
            </div>

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
                                <div className={cx('list-item', 'active')}>
                                    <p>Chapter 1: Thu ha xinh dep tuyet voi :3</p>
                                </div>
                                <div className={cx('list-item')}>
                                    <p>Chapter 2: Thu ha xinh dep tuyet voi :3</p>
                                </div>
                                <div className={cx('list-item')}>
                                    <p>Chapter 3: Thu ha xinh dep tuyet voi :3</p>
                                </div>
                                <div className={cx('list-item')}>
                                    <p>Chapter 4: Thu ha xinh dep tuyet voi :3</p>
                                </div>
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
