const express = require('express');
const db = require('../models/index');
const Product = db.product;

module.exports = {
  index: (req, res) => {
    Product.findAll().then(product => {
      if (product.length <= 0) {
        res.status(404).json({
          "message": "No data!"
        })
      } else {
        const respone = {
          count: product.length,
          product: product.map(item => {
            return {
              id: item.id,
              name: item.name,
              description: item.description,
              quantity: item.quantity,
              status: item.status,
              category: `https://congngheso1.herokuapp.com/${item.categoryId}`
            }
          })
        }
        res.status(200).json(respone);
      }
    }).catch(err => {
      res.status(500).json({
        "message": "Server Error"
      });
    });
  },

  store: (req, res) => {
    let productData = {
      name: req.body.name,
      description: req.body.description,
      quantity: req.body.quantity,
      status: req.body.status,
      categoryId: req.body.categoryId
    }
    if (!productData) {
      res.status(400).json({
        "message": "Bad Data"
      });
    } else {
      Product.findOne({
        where: {
          name: req.body.name
        }
      }).then(product => {
        if (!product) {
          Product.create(productData).then(() => {
            res.status(200).json({
              "message": "Create product success!"
            });
          }).catch(err => {
            res.status(400).json({
              "message": err.errors[0].message
            });
          });
        } else {
          res.status(300).json({
            "message": "Product exist!"
          })
        }
      }).catch(err => {
        res.status(500).json({
          "message": "Server Error"
        });
      });
    }
  },

  destroy: (req, res) => {
    const id = req.params.id;
    Product.destroy({
      where: {
        id: id
      }
    }).then(() => {
      res.status(200).json({
        "message": "Delete Category Success!"
      });
    }).catch(err => {
      res.status(500).json({
        "message": "Server error"
      });
    });
  },


  update: (req, res) => {
    const id = req.params.id;
    const productData = {};
    for (const ops of req.body) {
      productData[ops.propName] = ops.value;
    }
    Product.update(productData, {
      where: {
        id: id
      }
    }).then(product => {
      res.status(200).json({
        "message": "Product Update!",
        "url": "https://congngheso1.herokuapp.com/product"
      });
    }).catch(err => {
      res.status(500).json({
        "message": "Server Error"
      });
    });
  },


  show: (req, res) => {
    Product.findOne({
      where: {
        id: req.params.id
      }
    }).then(product => {
      const respone = {
        id: product.id,
        name: product.name,
        description: product.description,
        status: product.status,
        category: `https://congngheso1.herokuapp.com/category/${product.categoryId}`
      }
      res.status(200).json(respone)
    }).catch(err => {
      res.status(404).json({
        "message": "Not found"
      })
    });
  }
}