import * as Express from 'express';
// import * as MethodOverride from 'method-override'
import './model/index';
import { KaiFanRouter } from './route/index';
import { getAllUser, getUserByUsername } from './service/kaifan';

var App = Express();
App.use('/kaifan', KaiFanRouter);
App.use(Express.static(__dirname + '/public'));// static   server 静态文件服务器
// App.use(MethodOverride()); 方法覆盖,一般不用也可以





App.listen(3000, () => {
    console.log('server is runing on port 3000');
});