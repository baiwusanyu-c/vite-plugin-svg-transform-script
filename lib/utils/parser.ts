/*
* @parser.ts
* @deprecated 
* @author czh
* @update (czh 2021/12/8)
*/
/**
 * 驼峰转化
 * @param str 待转化字符串
 * @return {*}
 */
export const camelize = function (str:string):string {
    return str.replace(/-(\w)/g, (_, c) => c ? c.toUpperCase() : '')
}