const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Something went wrong, please try again later!'
    });
};

module.exports = errorHandler;
