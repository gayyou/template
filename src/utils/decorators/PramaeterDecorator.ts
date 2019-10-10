import {isUndef} from '@/utils/shared';

/**
 * @author Weybn
 * @version 1.0.0
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
  const funcRowCode = target[name].toString();

  // 得到这个函数体的内容
  const funcBody = funcRowCode.substring(funcRowCode.indexOf('{') + 1, funcRowCode.lastIndexOf('}'));

  // 将参数名一个一个提取出来
  const params: string[] = funcRowCode.substring(funcRowCode.indexOf('(') + 1, funcRowCode.indexOf(')')).split(',');

  // 去掉参数两边的空白
  params.forEach((item: string) => item.trim());

  // 修改函数体的内容并且
  const resultFuncBody: string = `
    ${isUndef};
    if (isUndef(arguments[${index}])) {
      console.log("传参为空");
    };` + funcBody;

  // @ts-ignore
  // 修改方法的指向
  target[name] = new Function(...params, resultFuncBody);
};

export class A {
  public say(@NotNull target: string, tar: string) {
    console.log(target);
    console.log(tar);
  }
}
