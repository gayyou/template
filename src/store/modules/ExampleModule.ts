import {getModule, Module, Mutation, VuexModule} from 'vuex-module-decorators';
import store from '@/store/store';

/**
 * @description store模块化的用法，其中到出去的模块可以直接用
 */
@Module({
  dynamic: true,
  store,
  name: 'Example',
})
class ExampleModule extends VuexModule {
  // 属性就是state
  public msg: string = 'Example';

  // mutation一般情况下是同步函数，是修改msg的唯一途径，不要直接利用.运算符进行修改，因为这样的话不会触发内置函数
  @Mutation
  public setMsg(msg: string) {
    this.msg = msg;
  }
}

export const ExampleStore = getModule(ExampleModule);
