import path from 'path';

export const authController = {
    getSlash: (req, res, next) => {
        try {
        res.sendFile(path.resolve('public', 'users.html'));

        } catch (error) {
            next(createHttpError(500, 'Internal Server Error'));
        }
    }
};