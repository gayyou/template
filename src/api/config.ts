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
export const _Request = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
});
