const db = require('../models/index');
const Variation = db.variation;
const Sequelize = require('sequelize');
module.exports = {
  index: (req, res) => { // Hàm lấy danh sách báo giá
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

  show: (req, res) => { // lấy thông tin 1 thằng
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

  destroy: (req, res) => { // Xóa 1 thằng
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

  update: (req, res) => { // Cập nhật 1 thằng
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
    }).catch(Sequelize.ValidationError, err => {
      res.status(201).json({
        "errors": err.message
      })
    })
  },

  store: (req, res) => { // tạo một thằng
    let dataVariation = { // Lấy dữ liệu từ form
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
      // Variation.findOne({
      //   where: {
      //     name: req.body.name
      //   }
      // }).then(variation => {
      //   if (!variation) {
      Variation.create(dataVariation).then((newVariation) => {
        res.status(200).json({
          "variation": newVariation,
          "message": "Variation create success!"
        });
      }).catch(Sequelize.ValidationError, err => {
        res.status(201).json({
          "errors": err.message
        })
      })
      //   } else {
      //     res.status(300).json({
      //       "message": "Variation exits"
      //     })
      //   }
      // }).catch(err => {
      //   res.status(500).json({
      //     message: "Server error"
      //   });
      // });
    }
  }


}