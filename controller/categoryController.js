const db = require('../models/index');
const Category = db.category;
const express = require('express');

module.exports = {
  index: (req, res) => {
    Category.findAll().then(category => {
      if (category.length > 0) {
        const response = {
          count: category.length,
          category: category.map(item => {
            return {
              id: item.id,
              name: item.name,
              description: item.description,
              status: item.status,
              url: `https://congngheso1.herokuapp.com/category/${item.id}`
            }
          })
        }
        res.status(200).json(response);
      } else {
        res.status(404).json({
          "message": "Data not found"
        });
      }
    }).catch(err => {
      res.status(500).json({
        "message": "Server error"
      });
    });
  },

  store: (req, res) => {
    const categoryData = {
      name: req.body.name,
      description: req.body.description,
      status: req.body.status,
      slug: req.body.slug
    }
    if (!categoryData) {
      res.status(400).json({
        "message": "Bad Data"
      })
    } else {
      Category.findOne({
        where: {
          name: req.body.name
        }
      }).then(category => {
        if (!category) {
          Category.create(categoryData).then(category => {
            res.status(200).json({
              "message": "Category store success!"
            })
          }).catch(err => {
            res.status(400).json({
              "message": err.errors[0].message
            });
          });
        }
      }).catch(err => {
        res.status(500).json({
          "message": err
        });
      });
    }
  },

  destroy: (req, res) => {
    Category.destroy({
      where: {
        id: req.params.id
      }
    }).then(() => {
      res.status(200).json({
        "message": "Delete Category Success!"
      });
    }).catch(err => {
      res.status(500).json({
        "message": "Server error"
      })
    })
  },

  show: (req, res) => {
    Category.findAll({
      where: {
        id: req.params.id
      },
      attributes: ['id', 'name', 'status', 'description']
    }).then(category => {
      if (category.length > 0) {
        res.status(200).json({
          category
        });
      } else {
        res.status(400).json({
          "message": "Category doesnt' exist!"
        });
      }
    }).catch(err => {
      res.status(500).json({
        "message": "Server error"
      })
    })
  },

  update: (req, res) => {
    const id = req.params.id;
    const categoryData = {};
    console.log(req.body);
    for (const ops of req.body) {
      categoryData[ops.propName] = ops.value;
    }
    // console.log(categoryData);
    Category.update(categoryData, {
      where: {
        id: id
      }
    }).then(result => {
      res.status(200).json({
        "message": "Category Update!",
        "url": "https://congngheso1.herokuapp.com/category"
      })
    }).catch(err => {
      res.status(500).json({
        "message": "Server Error"
      })
    })
  }
}