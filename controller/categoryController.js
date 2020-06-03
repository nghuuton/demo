const db = require('../models/index'); // Khai báo Model
const Category = db.category; // Thêm model category

module.exports = { // xuất ra
  index: async (req, res) => { // Hàm bất đồng bộ lấy danh sách danh mục
    const category = await Category.findAll(); // Lấy tất cả các danh muc xong mới chạy dòng tiếp theo
    // const page = parseInt(req.query.page) || 1; // trang hiện tại
    // const perPage = 4; // số danh mục trong một trang
    // const start = (page - 1) * perPage; // bắt đầu
    // const end = page * perPage; // kết thúc
    if (category) { // nếu có danh mục
      const respone = {
        "category": category, // danh mục sau khi cắt
        // "currentPage": page, // trang hiện tại
        // "total": category.length, // tổng số danh mục
        // "lastPage": Math.ceil(category.length / 4), // trang cuối
        // "start": start,
        // "end": end
      }
      res.status(200).json(respone) // trả dữ liệu về client
    } else { // nêu không có danh mục thì trả về message Not Found
      res.status(404).json({
        "message": "Not Found"
      })
    }
    // .then(category => {
    //   if (category.length > 0) {
    //     const response = {
    //       count: category.length,
    //       category: category.map(item => {
    //         return {
    //           id: item.id,
    //           name: item.name,
    //           description: item.description,
    //           status: item.status,
    //           url: `https://congngheso1.herokuapp.com/category/${item.id}`
    //         }
    //       })
    //     }
    //     res.status(200).json(response);
    //   } else {
    //     res.status(404).json({
    //       "success": false
    //     });
    //   }
    // }).catch(err => {
    //   res.status(500).json({
    //     "message": "Server error"
    //   });
    // });
  },

  store: async (req, res) => { // Hàm bất đồng bộ tạo mới một danh muc
    const categoryData = { // Lấy dữ liệu từ form
      name: req.body.name,
      description: req.body.description,
      status: req.body.status,
      slug: req.body.slug
    }
    if (!categoryData) { // Nếu không có dữ liệu trả về client message Bad Data
      res.status(400).json({
        "message": "Bad Data"
      })
    } else {
      const category = await Category.findOne({
        where: {
          name: req.body.name
        }
      }) // Tìm sản phẩm có tên nhập từ form
      if (category) { // nếu có trả về client success false
        res.json({
          "success": false
        })
      } else { // Còn không tạo danh mục mới
        Category.create(categoryData).then(category => { // tạo danh mục mới với dữ liệu nhập từ form
          res.status(200).json({ // trả về dữ liệu của danh mục mới tạo và message Category store success
            "category": category,
            "message": "Category store success!"
          })
        }).catch(err => { // trả về client nếu lỗi
          res.status(400).json({
            "message": err.errors[0].message
          });
        });
      }
      // }).then(category => {
      //   if (!category) {
      //     Category.create(categoryData).then(category => {
      //       res.status(200).json({
      //         "category": category,
      //         "message": "Category store success!"
      //       })
      //     }).catch(err => {
      //       res.status(400).json({
      //         "message": err.errors[0].message
      //       });
      //     });
      //   }
      // }).catch(err => {
      //   res.status(500).json({
      //     "message": err
      //   });
      // });
    }
  },

  destroy: (req, res) => { // Hàm xóa một danh mục
    Category.destroy({
      where: {
        id: req.params.id
      }
    }).then((category) => {
      res.status(200).json({
        "category": category,
        "message": "Delete Category Success!"
      });
    }).catch(err => {
      res.status(500).json({
        "message": "Server error"
      })
    })
  },

  show: (req, res) => { // Hàm Show Thông Tin một danh mục
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
        "result": result,
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