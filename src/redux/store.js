import { configureStore } from '@reduxjs/toolkit';
import chapterSlide from './chapterCurrent.js';
import loadingSlide from './loading.js';

export const store = configureStore({
    reducer: {
        chapter: chapterSlide,
<<<<<<< HEAD
        // book: bookSlide,
=======
        loading: loadingSlide,
>>>>>>> main
    },
});
