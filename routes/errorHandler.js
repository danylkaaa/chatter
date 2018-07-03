const express = require('express');
const createError =require('http-errors');

const router = express.Router();

// catch 404 and forward to error handler
router.use((req, res, next) =>{
    next(createError(404));
});

// error handler
router.use((err, req, res) =>{
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports=router;