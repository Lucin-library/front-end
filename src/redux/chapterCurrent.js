import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    value: 0,
    // loading: true,
};

export const chapterSlide = createSlice({
    name: 'chapter',
    initialState,
    reducers: {
        setNextChapterNumber: (state) => {
            state.value += 1;
        },
        setPreviousChapter: (state) => {
            state.value -= 1;
        },
        setConcreteChapter: (state, actions) => {
            state.value = actions.payload;
        },
    },
});

export const { setNextChapterNumber, setPreviousChapter, setConcreteChapter } = chapterSlide.actions;
export const chapterNumber = (state) => state.chapter.value;

export default chapterSlide.reducer;
