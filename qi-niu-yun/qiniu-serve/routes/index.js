var express = require('express');
// var app = express();
   
var qiniu = require("qiniu");
var router = express.Router();

var accessKey = 'h6BkfhZ-X2xcGqz-qcy7J5FFoo5zuHr8me1e_Nw1';
var secretKey = 'gzwDa0e4EgwUPVx3FzuvF05mw-kQJv8V6T9WUiBD';
var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

/* GET home page. */
router.get('/look', function(req, res, next) {
  // 获取指定路径地址
  // var config = new qiniu.conf.Config();
  // var bucketManager = new qiniu.rs.BucketManager(mac, config);
  // var privateBucketDomain = 'http://s30eih4r2.hb-bkt.clouddn.com';
  // var deadline = parseInt(Date.now() / 1000) + 3600; // 1小时过期
  // var key = 'League of Legends (TM) Client 2023-06-18 17-43-57.mp4'
  // var privateDownloadUrl = bucketManager.privateDownloadUrl(privateBucketDomain, key, deadline);
  // console.log(privateDownloadUrl);

  // 获取所有
  var config = new qiniu.conf.Config();
  //config.useHttpsDomain = true;
  config.zone = qiniu.zone.Zone_z1;
  var bucketManager = new qiniu.rs.BucketManager(mac, config);
  var bucket = 'zheng-jiu-zhe';
  var options = {
    limit: 10,
    prefix: 'viedo/',
  };
  bucketManager.listPrefix(bucket, options, function(err, respBody, respInfo) {
    if (err) {
      console.log(err);
      throw err;
    }
    if (respInfo.statusCode == 200) {
      //如果这个nextMarker不为空，那么还有未列举完毕的文件列表，下次调用listPrefix的时候，
      //指定options里面的marker为这个值
      var nextMarker = respBody.marker;
      var commonPrefixes = respBody.commonPrefixes;
      // console.log(nextMarker);
      // console.log(commonPrefixes);
      var items = respBody.items;
      items.forEach(function(item) {
        // console.log(item.key);
        var key = item.key
        if(key.length<=6){
          return
        }
        console.log(key.length);
        var privateBucketDomain = 'http://s30eih4r2.hb-bkt.clouddn.com';
        var deadline = parseInt(Date.now() / 1000) + 3600; // 1小时过期
        var privateDownloadUrl = bucketManager.privateDownloadUrl(privateBucketDomain, key, deadline);
        console.log(privateDownloadUrl);
        // console.log(item.putTime);
        // console.log(item.hash);
        // console.log(item.fsize);
        // console.log(item.mimeType);
        // console.log(item.endUser);
        // console.log(item.type);
      });
    } else {
      console.log(respInfo.statusCode);
      console.log(respBody);
    }
    
  });


  
res.end("aaa")
  
});
// app.listen(3000,function(){     //启动监听端口8080
//   console.log('正在监听3000端口')      
// });  

module.exports = router;
