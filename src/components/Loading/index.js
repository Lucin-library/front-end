// Loading.js
import React from 'react';
import styles from './loading.module.css'; // Assuming you'll style it with CSS

const Loading = () => {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.spinner}></div>
            <p>Loading</p>
        </div>
    );
};

export default Loading;
