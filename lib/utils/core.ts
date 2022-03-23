import {Plugin} from 'vite'
import {findSvgFile} from "./svg-file-loader";
import {createFile} from "./create-file";
import {ISvgTransScriptOption,ISvgCtxItem} from "../types/types";

export const transformScript = ( config: ISvgTransScriptOption): Plugin => {
// 读取svg文件内容
    const svgData:Array<ISvgCtxItem> = findSvgFile(config.input)
    return {
        name: 'svg-transform-script',
        configResolved ():void {
            createFile(config.output,config.name,config.type,config.format,svgData)
        }
    }
}