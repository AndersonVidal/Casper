const express = require('express');
const router = express.Router();
const noticeController = require('../controllers/noticeController')

router.get('/', noticeController.getAll);
router.get('/:id', noticeController.getOne);
router.post('/', noticeController.create)
router.put('/:id', noticeController.update);
router.delete('/:id', noticeController.delete);

module.exports = router;