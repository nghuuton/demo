const express = require('express');
const db = require('../models/index');
const Product = db.product;
const Image = db.image;
const fs = require('fs');

module.exports = {
  index: (req, res) => {
    Product.findAll({
      include: {
        model: Image,
        as: 'image'
      }
    }).then(product => {
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
              imagePath: item.image.map(image => {
                return image.slug
              }),
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

  store: async (req, res) => {
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
      const product = await Product.findOne({
        where: {
          name: productData.name
        }
      });
      if (product) {
        res.status(301).json({
          "message": "Sản phẩm đã tồn tại"
        })
      } else {
        Product.create(productData).then(product => {
          let arrImage = req.files;
          arrImage.forEach(image => {
            product.createImage({
              slug: image.path
            })
          })
          res.status(200).json({
            "message": "Create Product Success"
          });
        }).catch(err => {
          res.status(500).json({
            "Error": err
          })
        })
      }
    }
  },

  destroy: async (req, res) => {
    const id = req.params.id;
    const pathImage = await Image.findAll({
      attributes: ['slug'],
      where: {
        productId: id
      }
    });
    if (pathImage) {
      pathImage.forEach(path => {
        fs.unlink(path.slug, err => {
          if (err) throw err;
        })
      });
      Image.destroy({
        where: {
          productId: id
        }
      })
    }
    Product.destroy({
      where: {
        id: id
      }
    }).then(() => {
      res.status(200).json({
        "message": "Delete Product Success!"
      });
    }).catch(err => {
      res.status(500).json({
        "message": "Server error"
      });
    });
  },


  update: async (req, res) => {
    const id = req.params.id;
    const productData = req.body;
    const imageData = req.files;
    const pathImage = await Image.findAll({
      attributes: ['slug'],
      where: {
        productId: id
      }
    });
    // for (const ops of req.body) {
    //   productData[ops.propName] = ops.value;
    // }
    // for (const opsImg of req.files) {
    //   opsImg[opsImg.propName] = opsImge.value
    // }
    if (Object.entries(imageData).length !== 0) {
      pathImage.forEach(path => {
        fs.unlink(path.slug, err => {
          if (err) console.log(err);
        });
      });
      Image.destroy({
        where: {
          productId: id
        }
      });
      imageData.forEach(image => {
        Image.create({
          slug: image.path,
          productId: id
        });
      });
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
      include: {
        model: Image,
        as: 'image'
      },
      where: {
        id: req.params.id
      }
    }).then(product => {
      const respone = {
        id: product.id,
        name: product.name,
        description: product.description,
        status: product.status,
        pathImage: product.image.map(path => {
          return path.slug
        }),
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