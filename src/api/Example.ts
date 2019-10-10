import {_Request} from '@/api/config';
import {NotNull} from '@/utils/decorators/PramaeterDecorator';

/**
 * @description 调用接口的用法，这是一个样例，其中NotNull装饰器用来判断传进来的参是否为空
 */
export class Example {
  public static getExample(@NotNull postMessage: any) {
    return;
  }
}
