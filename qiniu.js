// AK  ZFDzVPuHItnBHW0FX5_-wwR5dKmMEZd11J-NPLh5
// SK nldLZuR8N38LesVt0eAJRYdE_ybZ55CwKXHV4jag

var qiniu = require("qiniu");

//需要填写你的 Access Key 和 Secret Key
qiniu.conf.ACCESS_KEY = 'ZFDzVPuHItnBHW0FX5_-wwR5dKmMEZd11J-NPLh5';
qiniu.conf.SECRET_KEY = 'nldLZuR8N38LesVt0eAJRYdE_ybZ55CwKXHV4jag';

//要上传的空间
var bucket = 'topshadow';

//上传到七牛后保存的文件名
var key = 'package.json';

//构建上传策略函数
function uptoken(bucket, key) {
    var putPolicy = new qiniu.rs.PutPolicy(bucket + ":" + key);
    return putPolicy.token();
}

//生成上传 Token
var token = uptoken(bucket, key);

//要上传文件的本地路径
var filePath = './package.json'

//构造上传函数
function uploadFile(uptoken, key, localFile) {
    var extra = new qiniu.io.PutExtra();
    qiniu.io.putFile(uptoken, key, localFile, extra, function (err, ret) {
        if (!err) {
            // 上传成功， 处理返回值
            console.log(ret.hash, ret.key, ret.persistentId);
        } else {
            // 上传失败， 处理返回代码
            console.log(err);
        }
    });
}

//调用uploadFile上传
uploadFile(token, key, filePath);
