const express = require('express');
const router = express.Router();
const noticeController = require('../controllers/noticeController')

router.get('/', (req, res) => {
    const notices = noticeController.getAll();
    res.send(notices);
});

router.get('/:id', noticeController.getOne);

router.post('/', noticeController.create)

router.patch('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router;