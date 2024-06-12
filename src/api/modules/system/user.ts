import type { FetchGeographyResp, FetchUserInfoResp } from './model/UserType';

/**
 * @description 不提示获取用户信息
 */
export function selectByUserIdBySlient(params?: any) {
  return useDefaultRequest.get<FetchGeographyResp>('/user/selectByUserId', params, {
    ignoreCatch: true, // 不走统一拦截
    ignoreGlobalErrorMessage: true, // 报错不提示
  });
}

/**
 * @description 获取用户信息
 */
export function selectByUserId(params?: any) {
  return useDefaultRequest.get<FetchUserInfoResp>('/user/selectByUserId', params);
}
