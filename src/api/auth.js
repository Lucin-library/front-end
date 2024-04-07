import base from './base';

const login = ({ email, password }) => {
    console.log(email, password);
    return new Promise((resolve, reject) => {
        base.post('/auth/login', {
            email,
            password,
        })
            .then((response) => resolve(response))
            .catch((error) => reject(error));
    });
};

const register = (user) => {
    return new Promise((resolve, reject) => {
        base.post('/auth/register', { ...user })
            .then((response) => resolve(response))
            .catch((error) => reject(error));
    });
};

export const authApi = {
    login,
    register,
};
