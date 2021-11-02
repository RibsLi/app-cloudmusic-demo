import request from "./request";

export function getBannerData() {
  return request({
    url: "/banner"
  })
}

export function getIconData() {
  return request({
    url: "/homepage/dragon/ball"
  })
}