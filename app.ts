import * as Express from 'express';
// import * as MethodOverride from 'method-override'
var App = Express();
import './model/index';
import { kaiFanRouter } from './route/kaifan';

App.use('/kaifan', kaiFanRouter);
App.use(Express.static(__dirname));// static   server 静态文件服务器
// App.use(MethodOverride()); 方法覆盖,一般不用也可以

// App.use('/', (req, res, next) => {
//     res.json(req.query);
//     next();
// });


App.listen(3000, () => {
    console.log('server is runing on port 3000');
});