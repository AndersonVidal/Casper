module.exports = (app) => {
    const noticeRouter = require('./notice.router');
    app.use('/notice', noticeRouter);
}