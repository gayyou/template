import store from '../store';
import {getModule, Module, Mutation, VuexModule} from 'vuex-module-decorators';

interface ModuleItem {
  id: number;
  name: string;
  iconUrl: string;
  routerName: string;
}

/**
 * @description store模块化的用法，其中到出去的模块可以直接用
 */
@Module({
  dynamic: true,
  store,
  name: 'PageManageStore'
})
class PageManageStore extends VuexModule {
  public moduleList: ModuleItem[] = [
    {
      id: 1,
      name: '上传word',
      iconUrl: require('@/assets/images/icons/upload.png'),
      routerName: 'Upload'
    },
    {
      id: 2,
      name: '表单约束',
      iconUrl: require('@/assets/images/icons/limit.png'),
      routerName: 'Constraint'
    },
    {
      id: 3,
      name: '用户页面',
      iconUrl: require('@/assets/images/icons/user_page.png'),
      routerName: 'UserPage'
    }
  ];

  public currentModuleID: number = 1;

  public isShowAddFiledLayer: boolean = false;

  public isShowConstraintLayer: boolean = true;

  @Mutation
  public setShowAddFiled(status: boolean) {
    this.isShowAddFiledLayer = status;
  }

  @Mutation
  public setShowConstraintLayer(status: boolean) {
    this.isShowConstraintLayer = status;
  }

  @Mutation
  public setCurrentModuleID(id: number) {
    this.currentModuleID = id;
  }
}

export const pageManageStore = getModule(PageManageStore);
