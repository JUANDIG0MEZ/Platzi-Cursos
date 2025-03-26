function logErrors(err, req, res, next){
    console.log("log error")
    next(err)
}

function handlerError(err, req, res, next){
    console.log("handler error")
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })

}

function boomErrorHandler(err, req, res, next){
    if (err.isBoom){
        console.log("boom error")
        const {output} = err;
        res.status(output.statusCode).json(output.payload)
    }
    else {
        next(err)
    }
}

module.exports = {
    logErrors,
    handlerError,
    boomErrorHandler
}