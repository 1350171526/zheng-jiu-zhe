var express = require('express');
var router = express.Router();
var qiniu = require("qiniu");
var accessKey = 'h6BkfhZ-X2xcGqz-qcy7J5FFoo5zuHr8me1e_Nw1';
var secretKey = 'gzwDa0e4EgwUPVx3FzuvF05mw-kQJv8V6T9WUiBD';
var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
/* GET users listing. */

// 向前端发送token信息，前端利用token实现上传视频功能
router.get('/upload', function(req, res, next) {
  var options = {
    scope: 'zheng-jiu-zhe',
  };
  var putPolicy = new qiniu.rs.PutPolicy(options);
  var token=putPolicy.uploadToken(mac);
  res.send(token);
});


module.exports = router;