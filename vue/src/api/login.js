import request from '@/utils/request'

export function loginByUsername(loginname, password) {
  const data = {
    loginname,
    password
  }
  return request({
    url: '/passport/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/passport/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/home/userinfo',
    method: 'get',
    params: { token }
  })
}

