import base from './base';

const getNumberOfBook = async ({ pageSize, page }) => {
    try {
        const res = await base.get('/book/all', {
            params: {
                page,
                pageSize,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

const getDetails = async ({ id }) => {
    try {
        const res = await base.get(`/book/${id}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};

const getRecommendByGenre = async ({ genre }) => {
    try {
        const res = await base.get(`/book/recommend/genre/${genre}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};

const getRecommendByAuthor = async ({ id }) => {
    try {
        const res = await base.get(`/book/recommend/author/${id}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};

const getAllGenres = async () => {
    try {
        const res = await base.get('/genre');
        return res;
    } catch (error) {
        console.log(error);
    }
};

const getBooksByGenre = async ({ genre, page, pageSize }) => {
    try {
        const res = await base.get(`/book/recommend/genre/${genre}`, {
            params: {
                page,
                pageSize,
            },
        });
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const bookApi = {
    getNumberOfBook,
    getDetails,
    getRecommendByGenre,
    getRecommendByAuthor,
    getAllGenres,
    getBooksByGenre,
};
