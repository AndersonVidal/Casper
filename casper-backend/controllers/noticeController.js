const mongoose = require('mongoose');
const Notice = require('../models/notice.model')

exports.getAll = async (req, res) => {
    
    Notice.find({}, (err, notices) => {
        if (err) console.error(err);
        console.log(notices);
        res.status(200).send(notices);
    });
};

exports.getOne = async (req, res) => {
    Notice.findById(req.params.id, (err, notice) => {
        if (err) console.error(err);
        res.status(200).send(notice);
    });
};

exports.create = async (req, res) => {
    let notice = new Notice({
        title: req.body.title,
        image_url: req.body.image_url,
        notice_url: req.body.notice_url,
        topic: req.body.topic,
        description: req.body.description,
    });
    Notice.create(notice, (err) => {
        if (err) console.error(err);
        res.status(201).send(notice);
    })
};

exports.update = (req, res) => {
    let notice = new Notice({
        _id: req.params.id,
        title: req.body.title,
        image_url: req.body.image_url,
        notice_url: req.body.notice_url,
        topic: req.body.topic,
        description: req.body.description,
    });
    Notice.findByIdAndUpdate(req.params.id, notice, {new: false}, (err, noticeUpdated) => {
        if (err) console.error(err);
        res.status(200).send(noticeUpdated);
    });
};

exports.delete = (req, res) => {
    Notice.findByIdAndDelete(req.params.id, (err, noticeRemoved) => {
        if (err) console.error(err);
        res.status(200).send(noticeRemoved);
    });
};