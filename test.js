const upload = require('./middlewares/uploads');
const express = require('express');
const app = express();
const db = require('./models/index');
const Product = db.product;
const Image = db.imgae;
const cors = require('cors')
const bodyParser = require('body-parser');
const Sequelize = require('sequelize')
app.use(bodyParser.urlencoded({
	extended: true
}))
app.use(bodyParser.json());
app.options('*', cors());

Product.update({
	name: "1",
	quantity: 1,
	status: true,
	description: "1",
	categoryId: 1
}, {
	where: {
		id: "2"
	}
}).then(product => {
	console.log(product)
}).catch(Sequelize.ValidationError, err => {
	console.log(err.message)
})


app.listen(8000);