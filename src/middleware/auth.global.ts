import { WhitePageEnum } from '~/enums/auth';
import { useUserStore } from '~/store/modules/user';

const whitePathList: WhitePageEnum[] = [WhitePageEnum.BASE_HOME, WhitePageEnum.SERVER_ERROR_PAGE, WhitePageEnum.FETCH_TEST_PAGE];

export default defineNuxtRouteMiddleware(async to => {
  const userStore = useUserStore();
  // 获取用户信息
  let { userId } = userStore.getUserInfo;
  if (!userId) {
    const res = await userStore.fetchUserInfo();
    userId = res?.userId;
  }
  if (!whitePathList.includes(to.name as WhitePageEnum)) {
    if (!userId) {
      const nuxtApp = useNuxtApp();
      const { _route, $login } = nuxtApp;
      await $login(_route?.fullPath);
    }
  }
});
