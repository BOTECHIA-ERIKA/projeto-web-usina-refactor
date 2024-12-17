import createHttpError from 'http-errors';

const errorTemplate = (err)=>(`
    <header>
        <h2>Error ${err.message} </h2>
        <hr/>
        <p>Status Code: <strong>${err.status}</strong></p>
    </header>

`)


export const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500);
    console.log(err.status);
    const result = errorTemplate(err);
    res.send(result);
        
};

export const error404 = (req, res, next) => {

    const err = createHttpError(404, 'Not Found');
    res.status(err.status);
    const result = errorTemplate(err);
    res.send(result);

    next(err);
}