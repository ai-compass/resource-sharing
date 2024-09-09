import type { List } from "@/typings/list";
export function mergeJSON(jsonArray: List[]) {
  // 初始化一个包含A-Z键的对象
  const mergedJSON = {};
  for (let i = 65; i <= 90; i++) {
    mergedJSON[String.fromCharCode(i)] = [];
  }

  // 遍历每个JSON对象并合并数据
  jsonArray.forEach(json => {
    for (let key in json) {
      if (json.hasOwnProperty(key) && Array.isArray(json[key])) {
        mergedJSON[key] = mergedJSON[key].concat(json[key]);
      }
    }
  });

  return mergedJSON as List;
}
