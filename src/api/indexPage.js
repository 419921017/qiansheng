import api from "@/http";

// 小程序首页列表接口

// lat	float	required	纬度.
// lng	float	required	经度.
export const businessList = params => {
  return api.post("api/business/list", params);
};

// banner轮播图
export const businessBanner = () => {
  return api.get("api/business/banner");
};

// 搜索功能 (条件搜索功能待完善)

// search_type	integer	required	查询来源 1->首页搜索框 2->寻宠、寻主筛选查询.
// content	string	optional	required	nullable 查询内容(当查询来源为1时，使用该字段必填).
// type	integer	optional	required	nullable 数据种类1->寻宠 2->寻主(当查询来源为2时，使用该字段必填).
// lat	float	optional	required	nullable 纬度(当查询来源为2时，使用该字段必填).
// lng	float	optional	required	nullable 经度(当查询来源为2时，使用该字段必填).
// created_time	integer	optional	required	nullable 发布时间1->1周内 2->一个月内 3->半年内 4->一年内(当查询来源为2时，使用该字段必填).
// view_number	integer	optional	required	nullable 查看数量1-><100 2->>=100<200 3->>=200(当查询来源为2时，使用该字段必填).
export const businessSearch = params => {
  return api.post("api/business/search", params);
};

// 寻宠启示栏->寻宠列表(默认按照时间排序)

// lat	float	required	纬度.
// lng	float	required	经度.
export const businessPetList = params => {
  return api.post("api/business/pet/list", params);
};

// 领养活动列表

export const businessAdoptList = () => {
  return api.get("api/business/adopt/list");
};

// 志愿者加入我们 表单页
export const mycenterVolunteer = () => {
  return api.get("api/mycenter/volunteer");

}

// 发布寻宠信息
export const businessPetCreate = (params) => {
  return api.post('api/business/pet/create', params)
}
