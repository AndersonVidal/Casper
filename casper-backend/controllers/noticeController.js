const mongoose = require('mongoose');
const Notice = require('../models/notice.model')

exports.getAll = async (req, res) => {
    Notice.find({}, (err, notices) => {
        if (err) console.error(err);
        res.status(200).send(notices);
    });
};

exports.getOne = async (req, res) => {
    Notice.findById(req.params.id, (next, err, notice) => {
        if (err) return next(err);
        res.status(200).send(notice);
    })
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
    
};

exports.delete = (req, res) => {
    try {

    } catch(err) {
        res.status(500).json({ message: err.message });
    }

};