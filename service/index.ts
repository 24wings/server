// import * as kaiFanProxy from './kaifan'
// export { kaiFanProxy };
import { KaiFanUserModel } from '../model/index';

KaiFanUserModel.find((err, doc) => {
    err ? console.error(err) : console.log(doc);
});
