import request from "./request";

// 发现页轮播数据
export function getBannerData() {
  return request({
    url: "/banner"
  })
}

// 发现页icon图标数据
export function getIconData() {
  return request({
    url: "/homepage/dragon/ball"
  })
}

// 发现页推荐歌单数据
export function getRecommendData(limit) {
  return request({
    url: "/personalized",
    params: {
      limit
    }
  })
}

// 发现页电台24小时主播榜
export function getDjData(limit) {
  return request({
    url: "/dj/toplist/hours",
    params: {
      limit
    }
  })
}