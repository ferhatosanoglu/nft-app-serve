module.exports = (err, reg, res, next) => {
    res.status(err.statusCode).json(err);
};