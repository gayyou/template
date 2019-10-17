import axios from 'axios';

let baseUrl: string;

if (process.env.NODE_ENV === 'production') {
  // 生产环境下使用真实路径
  baseUrl = '';
} else {
  // 非生产环境下，都使用代理服务器
  baseUrl = '/api';
}

// @ts-ignore
const _Request = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});


export class Request {
  public static get(url: string): Promise<any> {
    return _Request.get(url);
  }

  public static post(url: string, data: any): Promise<any> {
    return _Request.post(url, data);
  }

  public static upload(url: string, data: any): Promise<any> {
    return _Request.post(url, data, {
      headers:{'Content-Type':'multipart/form-data'}
    });
  }

  public static put(url: string, data: any) {
    return _Request.put(url, data);
  }

  public static delete(url: string, data: any) {
    return _Request.delete(url);
  }
}
