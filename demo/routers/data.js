function router(app) {
  var a = require('./minedata.json')
  app.get('/guomei/mine', function (req, res, next) {
      res.send({
          code: 200,
          message: '查询成功！',
          a
      })
  })
  app.get('/products/getRecommands', function (req, res, next) {
      res.send({
          code: 200,
          message: '查询成功！',
          a 
      })
  })
}

module.exports = router