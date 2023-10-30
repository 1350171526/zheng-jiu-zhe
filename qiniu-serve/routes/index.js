var express = require('express');
// var app = express();
   
var qiniu = require("qiniu");
var router = express.Router();

var accessKey = 'h6BkfhZ-X2xcGqz-qcy7J5FFoo5zuHr8me1e_Nw1';
var secretKey = 'gzwDa0e4EgwUPVx3FzuvF05mw-kQJv8V6T9WUiBD';
var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

/* GET home page. */
router.get('/total', function(req, res, next) {
  getLink(res,'')
});
router.get('/hot', function(req, res, next) {
  getLink(res,'hot')
});
router.get('/music', function(req, res, next) {
  getLink(res,'music')
});
const getLink = (res,path,nextMarker) =>{
  // 获取单个路径地址
  // var config = new qiniu.conf.Config();
  // var bucketManager = new qiniu.rs.BucketManager(mac, config);
  // var privateBucketDomain = 'http://s30eih4r2.hb-bkt.clouddn.com';
  // var deadline = parseInt(Date.now() / 1000) + 3600; // 1小时过期
  // var key = 'League of Legends (TM) Client 2023-06-18 17-43-57.mp4'
  // var privateDownloadUrl = bucketManager.privateDownloadUrl(privateBucketDomain, key, deadline);
  // console.log(privateDownloadUrl);

  // 获取指定前缀路径
  const vedioArr = [];
  var config = new qiniu.conf.Config();
  //config.useHttpsDomain = true;
  config.zone = qiniu.zone.Zone_z1;
  var bucketManager = new qiniu.rs.BucketManager(mac, config);
  var bucket = 'zheng-jiu-zhe';
  var options = {
    limit: 10,
    prefix: path,
    marker: nullq
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
      console.log(nextMarker);
      var commonPrefixes = respBody.commonPrefixes;
      // console.log(nextMarker);
      // console.log(commonPrefixes);
      var items = respBody.items;
      items.forEach(function(item) {
        // console.log(item.key);
        var key = item.key
        const length = path.length ? path.length+1 : 6
        if(key.length>length){
          // console.log(key.length);
          var privateBucketDomain = 'http://s30eih4r2.hb-bkt.clouddn.com';
          var deadline = parseInt(Date.now() / 1000) + 3600; // 1小时过期
          var privateDownloadUrl = bucketManager.privateDownloadUrl(privateBucketDomain, key, deadline);
          // console.log(privateDownloadUrl);
          vedioArr.push(privateDownloadUrl)
          // console.log(item.putTime);
          // console.log(item.hash);
          // console.log(item.fsize);
          // console.log(item.mimeType);
          // console.log(item.endUser);
          // console.log(item.type);
        }
        
      });
    } else {
      console.log(respInfo.statusCode);
      console.log(respBody);
    }
    console.log(vedioArr);
    res.send(vedioArr)
    
  });


}



module.exports = router;
