const express = require('express');
const router = express.Router();
const Passport = require('passport');

const PassportConfig = require('../middlewares/passport');


const CustomerController = require('../controller/customerController');

// router.use(Passport.initialize());
// router.use(Passport.session());


/* GET users listing. */
router.post('/register', CustomerController.register
  // Customer.findOne({
  //   where: {
  //     email: dataCustomer.email
  //   }
  // }).then(customer => {
  //   if (customer) {
  //     res.status(301).json({
  //       "message": "Email exits"
  //     })
  //   } else {
  //     Account.findOne({
  //       attributes: ['username'],
  //       where: {
  //         username: req.body.username
  //       }
  //     }).then((account) => {
  //       if (account) {
  //         res.status(301).json({
  //           "message": "Username exist"
  //         });
  //       } else {
  //         Customer.create(dataCustomer).then(customer => {
  //           let dataAccount = {
  //             username: req.body.username,
  //             password: req.body.password,
  //             customerId: customer.id
  //           }
  //           Account.create(dataAccount).then(() => {
  //             const token = createToken(dataAccount.username);
  //             res.setHeader("Authorization", token)
  //             res.status(200).json({
  //               "message": "Register success!",
  //             });
  //           }).catch(err => {
  //             res.json({
  //               "Error": err
  //             })
  //           })
  //         }).catch(err => {
  //           res.json({
  //             "Error": err
  //           })
  //         })
  //       }
  //     })
  //   }
  // });
  // Customer.create(dataCustomer).then(customer => {
  //   Account.findAll({
  //     attributes: ['username'],
  //     where: {
  //       username: dataAccount.username
  //     }
  //   }).then(account => {
  //     if (account.length > 0) {
  //       res.status(301).json({
  //         "message": "Account exist!"
  //       });
  //     } else {
  //       Account.create(dataAccount).then(() => {
  //         const token = JWT.sign({
  //           iss: 'Code1',
  //           sub: dataAccount.id,
  //           iat: new Date().getTime(),
  //           exp: new Date().setDate(new Date().getDate() + 1)
  //         }, 'congngheso1');
  //         res.status(200).json({
  //           "message": "Register success!",
  //           "token": token
  //         });
  //       });
  //     }
  //   });
  // }).catch(err => {
  //   res.status(500).json({
  //     "message": err.errors.map(item => {
  //       return {
  //         "message": item.message
  //       }
  //     })
  //   });
  // });
);

router.get('/secret', Passport.authenticate('jwt', {
  session: false
}), CustomerController.secret);

router.post('/logout', CustomerController.logout)

router.post('/test', (req, res) => {
  let {
    username,
    password
  } = req.body;
  console.log(username, password)
});

router.post('/login', Passport.authenticate('local', {
  session: false,
}), CustomerController.login);

router.get('/', CustomerController.index)
module.exports = router;