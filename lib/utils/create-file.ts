/*
* @create-file.ts
* @deprecated 
* @author czh
* @update (czh 2021/12/8)
*/
// 拼接脚本内容
import {camelize} from "./parser";
import {writeFile,exists,mkdir} from 'fs'
import {ISvgCtxItem} from "../types/types";
import * as path from "path";
/**
 * 生成脚本文件
 * @param outputPath 输出路径
 * @param fileName 文件名
 * @param svgCtx 读取的svg内容对象
 * @param type 生成文件类型 ts/js
 * @param format 生成文件导出类型 export 逐个个导出或default 为export default 多个导出
 */

export function createFile(outputPath:string = path.resolve(),fileName:string = 'svg-dict',type='ts',format='default',svgCtx:Array<ISvgCtxItem>):void{
    let scriptContent:string = ``
    // export 下导出
    let exportMainContent:string = ''
    // default 下导出
    let defaultMainContent:string = ''
    // 主体
    svgCtx.forEach((val:ISvgCtxItem)=>{
            if(format === 'export'){
                // ts & export 下 类型
                const FILETYPE:string = type === 'ts' ? ':string' :''
                exportMainContent = exportMainContent + `export const ${camelize(val.name)}${FILETYPE} = '${val.svg}';\n`
            }else{
                defaultMainContent = defaultMainContent + `${camelize(val.name)}:'${val.svg}',\n`
            }
        })
    // 尾部
    if(format === 'default') {
        // ts & default下 导出接口
        const ISVGDICT:string = `export interface ISVGDict {\n[key:string]:string\n}\n`
        let defaultDict:string = `${type === 'ts' ? ISVGDICT :''}export default {\n`;
        defaultDict = defaultDict + defaultMainContent + '} '
        scriptContent = type === 'ts' ? defaultDict + 'as ISVGDict;' : defaultDict
    }else{
        scriptContent = exportMainContent
    }


    /**
     * 生成脚本文件
     */
    exists(outputPath,  function(isExist:boolean) {
        if(!isExist){
             mkdir(outputPath,()=>{
                 writeFile(fileName + '.' + type,scriptContent,function (err:any){
                     if(err) {
                         console.log(err);
                         return
                     }
                     console.log("The file was saved!");
                 })
             })
        }else{
            writeFile(outputPath + fileName + '.' + type,scriptContent,function (err:any){
                if(err) {
                    console.log(err);
                    return
                }
                console.log("The file was saved!");
            })
        }
    });

}
