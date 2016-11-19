import { Router } from 'express';
import { kaiFanProxy } from '../proxy/index';
var kaiFanRouter = Router();


kaiFanRouter.all('/getAllUser', (req, res, next) => {
    // var allUsers = await 
    kaiFanProxy.findKaiFanUserAll().then(doc => {
        console.log(doc);
        res.json(doc);
    });

    // res.json(allUsers);
});
export { kaiFanRouter };