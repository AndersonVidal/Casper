import notice from '../controllers/noticeController';

export default (app) => {
    app.route('/notice')
        .get(notice.getAllNotices)
        .post(notice.createNotice);
    
    app.route('/notice/:noticeId')
        .get(notice.getNotice)
        .put(notice.updateNotice)
        .delete(notice.deleteNotice);
};