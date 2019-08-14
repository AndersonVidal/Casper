import mongoose from 'mongoose';
import notice from '../models/noticeModel';

exports.getNotice = (req, res) => {
    notice.findById(req.params.noticeId, (err, notice) => {
        if (err) {
            res.send(err);
        }
        res.json(notice);
    });
};

exports.getAllNotices = (req, res) => {
    notice.find({}, (err, notices) => {
        if (err) {
            res.send(err);
        }
        res.json(notices);
    });
};

exports.createNotice = (req, res) => {
    const newNotice = new notice(req.body);

    newNotice.save((err, notice) => {
        if (err) {
            res.send(err);
        }        
        res.json(notice);
    });
};

exports.updateNotice = (req, res) => {
    notice.findOneAndUpdate({
        _id: req.params.noticeId
    }, req.body,
        (err, notice) => {
            if (err) {
                res.send(err);
            }
            res.json(notice);
        });
};

exports.deleteNotice = (req, res) => {
    notice.remove({
        _id: req.params.noticeId
    }, (err) => {
        if (err) {
            res.send(err);
        }

        res.json({
            message: `Notice ${req.params.noticeId} successfully deleted`
        });
    });
};