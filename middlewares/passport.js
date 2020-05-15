const Passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const {
	JWT_SECRET
} = require('../config/jwt');

const {
	ExtractJwt
} = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../models/index');
const Account = db.account;
const Customer = db.customer;
const bcrypt = require('bcryptjs');

Passport.use(new JwtStrategy({
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken('Authorization'),
	secretOrKey: JWT_SECRET,
}, async (payload, done) => {
	try {
		const customer = await Customer.findOne({
			include: {
				model: Account,
				as: 'account',
				where: {
					username: payload.sub
				}
			},
		});
		if (!customer) return done(null, false);
		done(null, customer);
	} catch (error) {
		done(error, false);
	}
}));


Passport.use(new LocalStrategy({
	usernameField: 'username'
}, async (username, password, done) => {
	try {
		const account = await Account.findOne({
			where: {
				username
			},
			include: {
				model: Customer,
				as: 'customer',
			}
		})
		if (!account) {
			return done(null, false);
		}
		const correctPassword = await bcrypt.compare(password, account.password);
		if (!correctPassword) {
			return done(null, false)
		}
		done(null, account);
	} catch (error) {
		done(error, false);
	}
}));