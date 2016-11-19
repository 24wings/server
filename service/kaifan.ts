import { KaiFanUserModel } from '../model/index';
// import { kaiFanModel } from '../model/kaifan';


export var findKaiFanUserAll = () => {
    return KaiFanUserModel.find();
}