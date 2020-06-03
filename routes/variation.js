const express = require('express'); // thư viên express
const router = express.Router();
const variationController = require('../controller/variationController');

router.get('/', variationController.index);

router.post('/', variationController.store);

router.get('/:id', variationController.show); // :id nhập id vô

router.delete('/:id', variationController.destroy);

router.put('/:id', variationController.update);

module.exports = router;