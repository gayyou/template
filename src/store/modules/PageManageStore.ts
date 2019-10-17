import store from '../store';
import {getModule, Module, Mutation, VuexModule} from 'vuex-module-decorators';

interface ModuleItem {
  id: number;
  name: string;
  iconUrl: string;
}

/**
 * @description store模块化的用法，其中到出去的模块可以直接用
 */
@Module({
  dynamic: true,
  store,
  name: 'PageManageStore',
})
class PageManageStore extends VuexModule {
  public moduleList: ModuleItem[] = [
    {
      id: 1,
      name: '上传word',
      iconUrl: ''
    },
    {
      id: 2,
      name: '表单约束',
      iconUrl: ''
    },
    {
      id: 3,
      name: '用户页面',
      iconUrl: ''
    }
  ];

  public currentModuleID: number = 1;

  public setCurrentModuleID(id: number) {
    this.currentModuleID = id;
  }
}

export const pageManageStore = getModule(PageManageStore);
