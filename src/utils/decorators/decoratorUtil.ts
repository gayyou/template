// import {isArray, isBoolean, isNumber, isPlainObject, isString, isUndef} from '@/utils/shared';
// import {errorLog} from '@/utils/logs/logs';
//
// export function checkAllType(typeDefine: any, target: any): boolean {
//   const typeDefineObjectArray = [];   // 如果存在子对象的时候，要进行深度校正
//   const targetObjectArray = [];
//   const keys = Object.keys(typeDefine);
//
//   for (const item of keys) {
//     console.log(item)
//     if (isUndef(target[item])) {
//       // 当目标检测的对象中没有这个舒心的时候，那么就要进行报错
//       errorLog('接口参数不符合定义的要求');
//       errorLog('规定的参数为: ' + typeDefine.toString());
//       errorLog('你的参数为: ' + target.toString());
//       return false;
//     }
//
//     if (isString(typeDefine[item])) {
//       const type = typeDefine[item];
//       if (!checkType(target[item], type)) {
//         errorLog('接口参数类型不符合定义的要求');
//         errorLog('规定的参数为: ' + type);
//         errorLog('你的参数为: ' + typeof target[item]);
//         return false;
//       }
//     } else if (isPlainObject(typeDefine[item])) {
//       // 纯对象的情况下进行处理
//       typeDefineObjectArray.push(typeDefine[item]);
//       targetObjectArray.push(target[item]);
//     } else if (isArray(typeDefine[item])) {
//       // 如果是一个数组，那么就要对数组的第一个定义的元素进行判断识别
//     }
//   }
//
//   for (let i = 0; i < typeDefineObjectArray.length; i++) {
//     if (!checkAllType(typeDefineObjectArray[i], targetObjectArray[i])) {
//       console.log("出错了")
//       return false;
//     }
//   }
//
//   return true;
// }
//
// function checkType(value: any, type: string) {
//   switch (type) {
//     case 'string': {
//       return isString(value);
//     }
//     case 'number': {
//       return isNumber(value);
//     }
//     case 'boolean': {
//       return isBoolean(value);
//     }
//   }
//   return false;
// }
//
// // export function InterfaceParam(typeDefine: any): any {
// //   if (process.env.NODE_ENV === 'production') {
// //     return ;
// //   }
// //
// //   if (!isPlainObject(typeDefine)) {
// //     errorLog('类型定义一定是一个纯对象');
// //     return ;
// //   }
// //
// //   const keys = Object.keys(typeDefine);
// //
// //   // 遍历所有属性，进行校正
// //   for (const item of keys) {
// //     if (!isString(typeDefine[item]) && !isPlainObject(typeDefine[item])) {
// //       errorLog('定义接口类型的时候使用了不是基本数据类型之外的类型,以下是出错的类型定义: ');
// //       errorLog(typeDefine[item]);
// //       return ;
// //     } else if (isString(typeDefine[item])) {
// //       typeDefine[item] = typeDefine[item].toLowerCase();
// //     }
// //   }
// //
// //   return (target: any, name: string) => {
// //     // @ts-ignore
// //     const funcRowCode = target[name].toString();
// //
// //     // 得到这个函数体的内容
// //     const funcBody = funcRowCode.substring(funcRowCode.indexOf('{') + 1, funcRowCode.lastIndexOf('}'));
// //
// //     // 将参数名一个一个提取出来
// //     const params: string[] = funcRowCode.substring(funcRowCode.indexOf('(') + 1, funcRowCode.indexOf(')')).split(',');
// //
// //     // 去掉参数两边的空白
// //     params.forEach((item: string) => item.trim());
// //
// //     // 修改函数体的内容并且
// //     const resultFuncBody: string = `
// //       (${errorLog});
// //       (${checkAllType});
// //       if (!checkAllType(${typeDefine}, arguments[0])) {
// //         errorLog('类型检查出有不符合要求的类型');
// //       }
// //     ` + funcBody;
// //     // @ts-ignore
// //     // 修改方法的指向
// //     target[name] = new Function(...params, resultFuncBody);
// //   };
// // }
