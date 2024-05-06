import { useState, useEffect } from 'react';
import cx from 'classnames/bind'; // Import classNames/bind
import styles from './HeaderReading.module.scss'; // Import your SCSS file for styling
import Button from '../../components/Button';
const HeaderReading = ({ children }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [state, setState] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setIsVisible(currentScrollPos < prevScrollPos || currentScrollPos === 0);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    const handleBookmark = () => setState(!state);

    const cn = cx.bind(styles); // Bind your styles to cx

    return (
        <header className={cn('sticky-header', { visible: isVisible, hidden: !isVisible })}>
            <div className={cn('wrapper')}>
                <div>
                    <Button leftIcon={<i class="fa-solid fa-angle-left"></i>} className={cx('back')} />
                </div>
                <div>name of book : name of chapter</div>
                <div>
                    <div className={cx('actions')}>
                        {state ? (
                            <Button leftIcon={<i class="fa-solid fa-bookmark"></i>} onClick={handleBookmark} />
                        ) : (
                            <Button leftIcon={<i class="fa-regular fa-bookmark"></i>} onClick={handleBookmark} />
                        )}
                    </div>
                    <div data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default HeaderReading;
