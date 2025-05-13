

export function errorCheck(req, res, next) {
    console.log('res.statusCode');
    console.log(res.statusCode);
    next();
}