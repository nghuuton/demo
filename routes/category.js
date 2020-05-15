const express = require('express');
const router = express.Router();
const categoryController = require('../controller/categoryController');


router.get('/', categoryController.index);


router.post('/', categoryController.store);


router.delete('/:id', categoryController.destroy);

router.get('/:id', categoryController.show);

router.patch('/:id', categoryController.update)

module.exports = router;