var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var arr = [{
      ms: 'DH51602674',
      name: 'Huỳnh Quốc Như'
    },
    {
      ms: 'DH51602517',
      name: 'Nguyễn Văn Ngọc'
    },
    {
      ms: 'DH51602493',
      name: 'Nguyễn Hữu Tôn'
    },
    {
      ms: 'DH51602518',
      name: 'Triệu Chính Đạt'
    },
    {
      ms: 'DH51602702',
      name: 'Trương Hoàng Tùng'
    },
  ]
  res.render('index', {
    title: 'Nhóm 3',
    arr: arr
  }, );
});

router.get('/apiProduct', (req, res) => {
  res.render('product');
});

router.get('/apiVariation', (req, res) => {
  res.render('variation');
});
router.get('/apiCustomer', (req, res) => {
  res.render('customer')
})

module.exports = router;