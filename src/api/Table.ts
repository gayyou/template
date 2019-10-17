import {Request} from '@/api/config';
import {NotNull} from '@/utils/decorators/PramaeterDecorator';

export class Table {
  private static commonPrefix: string = '/form';

  public static getSupportForm(): Promise<any> {
    return Request.get(this.commonPrefix + '/supportform');
  }

  public static postStoreData(@NotNull userInfo: any): any {
    return Request.post(this.commonPrefix + '/storedata', userInfo);
  }

  public static uploadWord(@NotNull uploadInfo: any): Promise<any> {
    return Request.upload(this.commonPrefix + '/uploadword', uploadInfo);
  }

  public static getHTMLFile(@NotNull info: any): Promise<any> {
    return Request.post(this.commonPrefix + '/gethtml', info);
  }

  public static getToken(@NotNull formInfo: any): Promise<any> {
    return Request.post(this.commonPrefix + '/gettoken', formInfo);
  }
}
