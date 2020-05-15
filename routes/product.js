const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

router.get('/', productController.index);

router.post('/', productController.store);

router.delete('/:id', productController.destroy);

router.put('/:id', productController.update);

router.get('/:id', productController.show);

module.exports = router;