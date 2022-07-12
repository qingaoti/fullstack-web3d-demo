import { get } from "../utils/request";

/**
 * 获取web3d模型数据
 */
export function dataApi() {
    return get("/api/web3d/data", {});
}
