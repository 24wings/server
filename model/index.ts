import * as Mongoose from 'mongoose';
import { config } from '../config';

// 1.链接数据库
export var db = Mongoose.connect(config.db, (err) => {
    if (err) {
        console.error(err);
        process.exit(0);
    }
});

// 2.注册开饭用户的数据表
import './kaifan';

// 3.获取表的实体
export var KaiFanUserModel = Mongoose.model('KaiFanUser');