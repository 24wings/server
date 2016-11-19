import { KaiFanUserModel } from '../model/index';
// import { kaiFanModel } from '../model/kaifan';


/**
 * 
 * [es6 阮一峰 Promise对象讲解](http://es6.ruanyifeng.com/#docs/promise)
 */
export var getAllUser = () => {

    return KaiFanUserModel.find();
}

/**
 *  通过用户名来查找用户
 *  {username} 等价于 {username:username}
 */
export var getUserByUsername = (username: string) => {
    return KaiFanUserModel.find({ username });
}



