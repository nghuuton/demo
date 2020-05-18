const upload = require('./middlewares/uploads');
const express = require('express');
const app = express();
const db = require('./models/index');
const Product = db.product;
const Image = db.imgae;

app.post('/test', upload.array('image'), (req, res) => {
	let productData = {
		name,
		description,
		status,
		quantity,
		categoryId
	} = req.body;
	Product.create(productData).then(product => {
		let arrImage = req.files;
		arrImage.forEach(image => {
			product.createImage({
				slug: image.path
			})
		})
	})
})


app.listen(3000);