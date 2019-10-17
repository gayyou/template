import {LocalStorage} from '@/utils/localStorage/LocalStorage';

class UserInfoStorage extends LocalStorage{
  constructor() {
    super();
  }
}

export const userInfoStorage = new UserInfoStorage();
