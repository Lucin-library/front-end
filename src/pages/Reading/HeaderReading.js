import { useState, useEffect } from 'react';
import cx from 'classnames/bind'; // Import classNames/bind
import styles from './HeaderReading.module.scss'; // Import your SCSS file for styling
import Button from '../../components/Button';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const HeaderReading = ({ children }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [bookmark, setBookmark] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    let message;
    const navigate = useNavigate();

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

    const handleBookmark = () => {
        setBookmark(!bookmark);
        if (bookmark === true) message = 'Thêm bookmark thành công';
        else message = 'Xóa bookmark thành công';
        toast.success(message, {
            position: 'top-center',
        });
    };
    const goBack = () => {
        // Go back to the previous screen
        navigate(-1);
    };

    const cn = cx.bind(styles); // Bind your styles to cx

    return (
        <>
            <ToastContainer />
            <header className={cn('sticky-header', { visible: isVisible, hidden: !isVisible })}>
                <div className={cn('wrapper')}>
                    <div className={cn('custom-button')}>
                        <Button
                            onClick={goBack}
                            leftIcon={<i class="fa-solid fa-angle-left"></i>}
                            className={cx('back')}
                        />
                    </div>
                    <div>name of book : name of chapter</div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div>
                            {bookmark ? (
                                <Button leftIcon={<i class="fa-solid fa-bookmark"></i>} onClick={handleBookmark} />
                            ) : (
                                <Button leftIcon={<i class="fa-regular fa-bookmark"></i>} onClick={handleBookmark} />
                            )}
                        </div>
                        <div data-bs-toggle="offcanvas" data-bs-target="#listOfChapter" aria-controls="listOfChapter">
                            <i className="fa-solid fa-bars"></i>
                        </div>

                        <div data-bs-toggle="offcanvas" data-bs-target="#readingSetting" aria-controls="readingSetting">
                            <Button>
                                <i class="fa fa-gear"></i>
                            </Button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};
export default HeaderReading;
