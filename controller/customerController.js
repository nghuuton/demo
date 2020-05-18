const JWT = require('jsonwebtoken');
const {
	JWT_SECRET
} = require('../config/jwt');
const db = require('../models/index');


const Customer = db.customer;
const Account = db.account;

const createToken = (username) => {
	return JWT.sign({
		iss: 'Tom Tom',
		sub: username,
		iat: new Date().getTime(),
		exp: new Date().setDate(new Date().getDate() + 1)
	}, JWT_SECRET);
}

module.exports = {
	register: async (req, res) => {
		let dataCustomer = {
			name,
			gender,
			address,
			email,
			phone,
			card
		} = req.body;
		const customer = await Customer.findOne({
			where: {
				email: dataCustomer.email
			}
		});
		const account = await Account.findOne({
			where: {
				username: req.body.username
			}
		});
		if (customer) {
			res.status(300).json({
				"message": "Email exits"
			})
		} else {
			if (account) {
				res.status(300).json({
					"message": "Username exits"
				})
			} else {
				Customer.create(dataCustomer).then((customer) => {
					let dataAccount = {
						username: req.body.username,
						password: req.body.password,
						customerId: customer.id
					}
					Account.create(dataAccount).then(() => {
						const token = createToken(dataAccount.username);
						res.setHeader("Authorization", token)
						res.status(200).json({
							"message": "Register success!",
						});
					}).catch(err => {
						res.status(500).json({
							"Error": err
						});
					})
				}).catch(err => {
					res.status(500).json({
						"Error": err
					});
				});
			}
		}
	},

	logout: (req, res) => {
		delete req.headers['authorization'];
		res.status(200).json({
			success: true
		})
	},

	login: (req, res) => {
		const username = req.user.dataValues.username;
		const token = createToken(username);
		res.setHeader("Authorization", token);
		res.status(200).json({
			"success": true,
		})
	},

	index: (req, res) => {
		Customer.findAll({
			attributes: ['id', 'name', 'phone', 'address', 'gender'],
			include: {
				model: Account,
				as: 'account',
				attributes: ['username', 'password']
			}
		}).then(data => {
			if (data.length > 0) {
				res.status(200).json({
					"customer": data
				})
			} else {
				res.status(404).json({
					"message": "No Data"
				})
			}
		}).catch(err => {
			res.status(500).json({
				"message": "Server error"
			})
		})
	},

	secret: (req, res, next) => {
		return res.status(200).json({
			resource: true,
		});
	}
}