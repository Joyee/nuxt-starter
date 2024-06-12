export type FetchUserInfoResp = {
  accountUpdateTimes?: number; // 帐户名已经修改次数
  areaCode?: string; // 手机区号
  avatarUrl?: string; // 头像
  defaultTenantId?: string; // 默认租户
  isDelete?: number; // 删除标志
  lastLoginTime?: string; // 最后登录时间
  mobile?: string; // 手机号
  name?: string; // 用户姓名
  nickname?: string; // 用户昵称
  organType?: number; // 租户类型，1企业，0门店
  organTypeName?: string; // 租户类型名称
  regDate?: string; // 注册时间
  regEmail?: string; // 注册邮箱
  shopId?: string; // 门店id
  status?: number; // 用户状态 1-正常 2-锁定 3-注销
  storeType?: string; // 门店类型
  tenantId?: string; // 当前登录租户
  userId?: string; // 用户ID
};

export interface Value {
  value?: string;
  label?: string;
}

export type FetchGeographyResp = {
  ocean: Value[];
  mountain: Value[];
};
