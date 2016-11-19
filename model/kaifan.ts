import * as Mongoose from 'mongoose';

var Schema = Mongoose.Schema;

/**
 * 
 * [Mongoose文档](http://mongoosejs.com/)
 * 
 *  声明开饭表结构 开饭应用的表结构
 * 
 * 
 * 字段名 | 数据类型
 * - | -
 * username | String
 * password | String
 * gender | String
 * nickname | String
 * 
 * 
 * */
var KaiFanSchema = new Schema({
    username: String,
    password: String,
    gender: String,
    nickname: String
});

// 注册开饭表
Mongoose.model('KaiFanUser', KaiFanSchema);

