import { defineStore } from 'pinia';
import type { FetchUserInfoResp } from '~/api/modules/system/model/UserType';

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: {},
  }),
  getters: {
    getUserInfo(): FetchUserInfoResp {
      return this.userInfo || {};
    },
  },
  actions: {
    async fetchUserInfo(): Promise<FetchUserInfoResp> {
      return { ...this.userInfo };
    },
  },
});
