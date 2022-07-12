import { post } from "../utils/request";

/**
 * 用户登录
 * @param {*} user
 *  userName
 *  password
 */
export function loginApi(user) {
  return post("/api/user/login", user);
}
