import { Router } from 'express';
import { KaiFanProxy } from '../service/index';
/**
 * [response 方法](http://expressjs.com/zh-cn/4x/api.html#res)
 */

var KaiFanRouter = Router();

KaiFanRouter.all('/getAllUser', async (req, res, next) => {
    var allUser = await KaiFanProxy.getAllUser();
    res.json(allUser);
});

KaiFanRouter.all('/getUserByUsername', async (req, res, next) => {
    var user = await KaiFanProxy.getUserByUsername(req.query.username);
    res.json(user);
});

KaiFanRouter.all('/login', async (req, res, next) => {

    // 等价与 var username= req.query.username; var password = req.query.password;
    var {username, password} = req.query;
    if (username && password) {
        res.json({ issucess: true, data: req.query });
    }

});

export { KaiFanRouter };