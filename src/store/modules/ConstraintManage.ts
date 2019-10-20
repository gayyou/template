import {getModule, Module, Mutation, VuexModule} from 'vuex-module-decorators';
import store from '../store';

/**
 * @description store模块化的用法，其中到出去的模块可以直接用
 */
@Module({
  dynamic: true,
  store,
  name: 'Example',
})
class ConstraintManage extends VuexModule {

}

export const constraintManage = getModule(ConstraintManage);
