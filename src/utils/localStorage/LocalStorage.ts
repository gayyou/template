const _localStorage = window.localStorage;

/**
 * 本地存储功能的父类，将需要本地存储的数据进行模块封装，暴露出接口
 */
export class LocalStorage {
  protected setStorage(key: string, value: any) {
    _localStorage.setItem(key, value);
  }

  protected getStorage(key: string) {
    return _localStorage.getItem(key);
  }
}
