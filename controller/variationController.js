const db = require('../models/index');
const Variation = db.variation;

module.exports = {
  index: (req, res) => {
    Variation.findAll().then(variation => {
      if (variation.length > 0) {
        const respone = {
          count: variation.length,
          variation: variation.map(item => {
            return {
              id: item.id,
              name: item.name,
              price: item.price,
              price_sale: item.price_sale,
              status: item.status,
              productId: item.productId
            }
          })
        }
        res.status(200).json(respone);
      } else {
        res.status(404).json({
          "message": "No data"
        });
      }
    }).catch(err => {
      res.status(500).json({
        "message": "Server error"
      });
    });
  },

  show: (req, res) => {
    Variation.findOne({
      where: {
        id: req.params.id
      }
    }).then(variation => {
      if (variation) {
        const respone = {
          id: variation.id,
          name: variation.name,
          price: variation.price,
          price_sale: variation.price_sale,
          status: variation.status,
          productId: `https://congngheso1.herokuapp.com/product/${variation.productId}`
        }
        res.status(200).json({
          respone
        });
      } else {
        res.status(404).json({
          "message": "No data"
        });
      }
    }).catch(err => {
      res.status(500).json({
        "message": "Server error"
      });
    });
  },

  destroy: (req, res) => {
    Variation.destroy({
      where: {
        id: req.params.id
      }
    }).then(() => {
      res.status(200).json({
        "message": "Variation delete success!"
      });
    }).catch(err => {
      res.status(500).json({
        "message": "Server error"
      });
    });
  },

  update: (req, res) => {
    let dataVariation = {};
    for (const ops of req.body) {
      dataVariation[ops.propName] = ops.value
    }
    Variation.update(dataVariation, {
      where: {
        id: req.params.id
      }
    }).then(() => {
      res.status(200).json({
        "message": "Variation Updated!",
        "url": "https://congngheso1.herokuapp.com/variation"
      });
    }).catch(err => {
      res.status(500).json({
        "message": "Server error"
      });
    });
  },

  store: (req, res) => {
    let dataVariation = {
      name: req.body.name,
      price: req.body.price,
      price_sale: req.body.price_sale,
      status: req.body.status,
      productId: req.body.productId
    }
    if (!dataVariation) {
      res.status(400).json({
        "message": "Bad Data"
      })
    } else {
      Variation.findOne({
        where: {
          name: req.body.name
        }
      }).then(variation => {
        if (!variation) {
          Variation.create(dataVariation).then(() => {
            res.status(200).json({
              message: "Variation create success!"
            });
          }).catch(err => {
            res.status(500).json({
              message: err.errors[0].message
            })
          })
        } else {
          res.status(300).json({
            "message": "Variation exits"
          })
        }
      }).catch(err => {
        res.status(500).json({
          message: "Server error"
        });
      });
    }
  }


}