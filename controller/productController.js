const db = require('../models/index');
const Product = db.product;
const Image = db.image;
const fs = require('fs');
const Sequelize = require('sequelize')
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
              category: item.categoryId
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
    const productData = { // Lấy dữ liệu từ form
      name: req.body.name,
      description: req.body.description,
      quantity: req.body.quantity,
      status: req.body.status,
      categoryId: req.body.categoryId
    }

    // const product = await Product.findOne({
    //   where: {
    //     name: productData.name
    //   }
    // });
    // if (!product) {

    const arrPath = []; // khởi tạo mảng hình
    await Product.create(productData).then(pro => {
      let arrImage = req.files;
      arrImage.forEach(image => {
        arrPath.push(image.path)
        pro.createImage({
          slug: image.path
        }).then(() => {
          const response = {
            id: pro.id,
            name: pro.name,
            description: pro.description,
            quantity: pro.quantity,
            status: pro.status,
            category: pro.categoryId,
            imagePath: arrPath
          }
          return res.status(200).json({
            "product": response,
            "message": "Create Product Success !!!"
          });
        })
      })
    }).catch(Sequelize.ValidationError, err => {
      res.status(201).json({
        "errors": err.message
      })
    })
    // } else {
    // res.status(301).json({
    //   "message": "Sản phẩm đã tồn tại"
    // })
    // }
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
          if (err) console.log(err)
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

    // for (const ops of req.body) {
    //   productData[ops.propName] = ops.value;
    // }
    // for (const opsImg of req.files) {
    //   opsImg[opsImg.propName] = opsImge.value
    // }
    const arrImage = [];

    if (Object.entries(imageData).length !== 0) {
      const pathImage = await Image.findAll({
        attributes: ['slug'],
        where: {
          productId: id
        }
      });
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
        }).then(image => {
          arrImage.push(image.slug)
        });
      });
    }
    Product.update(productData, {
      where: {
        id: id
      }
    }).then(() => {
      res.status(200).json({
        "product": productData,
        "imagePath": arrImage ? arrImage : [],
        "message": `${productData.name} update success !`
      })
    }).catch(Sequelize.ValidationError, err => {
      res.status(201).json({
        "errors": err.message
      })
    })
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