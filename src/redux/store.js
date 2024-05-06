import { configureStore } from '@reduxjs/toolkit';
import chapterSlide from './chapterCurrent.js';

export const store = configureStore({
    reducer: {
        chapter: chapterSlide,
    },
});
