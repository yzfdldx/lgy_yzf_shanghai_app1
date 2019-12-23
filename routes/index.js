var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/test1.json', function(req, res, next) { // 查看详情
  try {
    const mysql = require('mysql');
    // const query = req.query;
    const query = req.body;
    var pool = mysql.createPool({
      host: '127.0.0.1',
      port: 3306,
      database: 'AXData', // 数据库
      user: 'as',
      password: 'lgy987654321',
    });
    pool.getConnection((err, connecting) => {
      if (err) {
        res.send({
          result: 'error',
          errorCode: err,
          message: '数据库连接失败',
        });
      } else { // 链接成功
        res.send({
          result: 'succeed',
          data: 'ok',
        });
      }
    });
  } catch (error) {
    res.send({
      result: 'error',
      errorCode: error,
      message: '未知错误',
    });
  }
});

router.get('/test.json', function(req, res, next) { // 查看详情
  try {
    // const query = req.query;
    const query = req.body;
    let mssql = require('mssql');
    let db = {};
    let config = {
        user: 'sa',
        password: 'lgy987654321',  //刚刚改好的密码
        server: 'DESKTOP-9G3CN68',  
        port: 1433,
        database: 'AXData',
        pool: {
            min: 0,
            max: 10,
            idleTimeoutMillis: 3000
        }
    };
    let connection = new mssql.ConnectionPool(config, function (err) {
      if (err) {
        res.send({
          result: 'error',
          errorCode: err,
          message: '数据库连接失败',
        });
      } else { // 链接成功
        res.send({
          result: 'succeed',
          data: 'ok',
        });
      }
    });
  } catch (error) {
    res.send({
      result: 'error',
      errorCode: error,
      message: '未知错误',
    });
  }
});

module.exports = router;
