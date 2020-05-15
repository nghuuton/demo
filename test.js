// const db = require('./models/index');

// // const Product = db.product;
// // const Variation = db.variation;
// const Account = db.account;
// // Account.findAll({
// // 	attributes: ['username']
// // }).then(a => {
// // 	console.log(a);
// // })
// // Product.findAll({
// // 	include: {
// // 		model: Variation,
// // 		as: 'variation'
// // 	}
// // }).then(product => {
// // 	if (product[0].variation[0].status == false) {
// // 		console.log(product[0].variation[0].price_sale);
// // 	} else {
// // 		console.log(product[0].variation[0].price);
// // 	}
// // })


// const bcrypt = require('bcryptjs');
// var passwordHash = '';
// async function HashPass() {
// 	try {
// 		const salt = await bcrypt.genSalt(10);
// 		console.log(salt);
// 		passwordHash = await bcrypt.hash('123', salt);
// 		password = await bcrypt.hash('123', salt);
// 		return await bcrypt.compare(passwordHash, password);
// 	} catch {
// 		console.log("errot")
// 	}
// }
// HashPass();

// // async function ComparePass() {
// // 	return await bcrypt.compare('123', passwordHash);

// // }
// // ComparePass();