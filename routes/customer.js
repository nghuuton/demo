const express = require('express');
const router = express.Router();
const db = require('../models/index');
const JWT = require('jsonwebtoken');
const Passport = require('passport');
const {
  JWT_SECRET
} = require('../config/jwt');
const PassportConfig = require('../middlewares/passport');

const Customer = db.customer;
const Account = db.account;



// router.use(Passport.initialize());
// router.use(Passport.session());
const createToken = (username) => {
  return JWT.sign({
    iss: 'Tom Tom',
    sub: username,
    iat: new Date().getTime(),
    exp: new Date().setDate(new Date().getDate() + 1)
  }, JWT_SECRET);
}

/* GET users listing. */
router.post('/register', async (req, res) => {
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
});

router.get('/secret', Passport.authenticate('jwt', {
  session: false
}), (req, res, next) => {
  return res.status(200).json({
    resource: true
  });
});

router.post('/logout', (req, res) => {
  delete req.headers['authorization'];
  res.status(200).json({
    success: true
  })
})

router.post('/login', Passport.authenticate('local', {
  session: false
}), (req, res) => {
  const username = req.user.dataValues.username;
  const token = createToken(username);
  res.setHeader("Authorization", token);
  res.status(200).json({
    "success": true,
  })
})

router.get('/', (req, res) => {
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
})
module.exports = router;