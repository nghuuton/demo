const express = require('express');
const router = express.Router();
const uploads = require('../middlewares/uploads');
const productController = require('../controller/productController');
const Passport = require('passport');

const PassportConfig = require('../middlewares/passport');



router.get('/', productController.index);

router.post('/', uploads.array('image', 4), productController.store);

router.delete('/:id', productController.destroy);

router.put('/:id', uploads.array('image', 4), productController.update);

router.get('/:id', productController.show);

module.exports = router;