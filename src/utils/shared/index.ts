// @ts-ignore
const _toString = Object.prototype.toString;

/**
 * @description 判断目标是否是未定义
 */
export function isUndef(v: any): boolean {
  return v === undefined || v === null;
}

/**
 * @description 判断是否是对象
 * @author Weybn
 * @version 1.0.0
 */
export function isObject(obj: any): boolean {
  return obj != null && typeof obj === 'object';
}

/**
 * @description 判断是否是纯对象，纯对象的概念就是用 new Object() 或者 {} 赋值的变量
 * @author Weybn
 * @version 1.0.0
 */
export function isPlainObject(obj: any): boolean {
  return _toString.call(obj) === '[object Object]';
}

/**
 * @description 从数组里面去除某个项
 * @author Weybn
 * @version 1.0.0
 */
export function removeItemFromArray(array: any[], item: any): any[] | void {
  if (array.length) {
    const index = array.indexOf(item);
    if (index > -1) {
      return array.splice(index, 1);
    }
  }

  return ;
}

/**
 * @description 创建一个具有闭包缓存的函数并返回，
 * @param fn 这个函数的需要有一个返回值，并且这个返回值可能会多次用到
 * @return fn 这个是增加缓存散列表后的函数，执行函数的时候会先看有没有缓存，如果有的话则进行读取缓存，无需执行函数
 */
export function cached(fn: any) {
  const cacheMap = Object.create(null);
  return ((parameter: any) => {
    return cacheMap[parameter] || (cacheMap[parameter] = fn(parameter));
  });
}
