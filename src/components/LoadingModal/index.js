import React from 'react';
import style from './styes.modules.css'; // Import the CSS file for styling

const LoadingModal = ({ show }) => {
    if (!show) {
        return null;
    }

    return (
        <div className={style.loadingModalOverlay}>
            <div className={style.spinner}></div>
            <p>Loading...</p>
        </div>
    );
};

export default LoadingModal;
