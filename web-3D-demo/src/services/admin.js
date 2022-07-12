import { get, post } from "../utils/request";

/**
 * 获取用户列表
 */
export function listApi() {
    return get("/api/user/list", { });
}

/**
 * 创建用户数据
 * @param {*} data
 */
export function createApi(data) {
    return post("/api/user/create", data);
}
