import {errorLog} from '@/utils/logs/logs';
import {isPlainObject, isString, isUndef} from '@/utils/shared';
import {Table} from '@/api/Table';

/**
 * @author Weybn
 * @version 1.1.0
 * @1.1.0 原本是使用重新创建一个新的方法来进行修改的，现在改为descriptor来修改
 * @description 该函数为类的方法的参数装饰器，表示这个参数的传参不能为空，该方法只在开发模式下使用
 * @param target 如果使用的类是静态类，那么就是静态的类对象，如果是类的实例，就是类的原型
 * @param name 调用方法的名字
 * @param index 被装饰参数的下标
 */
export const NotNull = (target: object, name: string, index: number) => {
  if (process.env.NODE_ENV === 'production') {
    return ;
  }

  // @ts-ignore
  console.log(target.prototype.constructor)

  // @ts-ignore
  let tempFunc = target[name];

  let notNull = function (...arg: any) {
    if (isUndef(arg[index])) {
      errorLog("传进方法的参数为空，具体信息如下: ");
      errorLog("对象是: " + target);
      errorLog("方法名是: " + name);
    }

    return tempFunc.apply(target, arg);
  };

  Object.defineProperty(target, name, {
    configurable: true,
    writable: true,
    enumerable: true,
    value: function(e: any) {
      console.log(123)
      console.log(e);
    }
  });
};
