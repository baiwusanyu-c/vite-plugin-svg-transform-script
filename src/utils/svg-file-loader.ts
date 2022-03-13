/*
* @svg-file-loader.ts
* @deprecated 
* @author czh
* @update (czh 2021/12/8)
*/
import {readFileSync, readdirSync} from 'fs'
import {camelize} from "./parser";
import {ISvgCtxItem} from "../types";

const svgTitle:RegExp = /<svg([^>+].*?)>/
const clearHeightWidth:RegExp = /(width|height)="([^>+].*?)"/g
const hasViewBox:RegExp = /(viewBox="[^>+].*?")/g
const clearReturn:RegExp = /(\r)|(\n)/g

export const findSvgFile = (dir:string):Array<ISvgCtxItem> =>{
    const svgRes:Array<ISvgCtxItem>= []
    const readInst = readdirSync(dir, {
        withFileTypes: true
    })
    for (const dirent of readInst) {
        if (dirent.isDirectory()) {
            svgRes.push(...findSvgFile(dir + dirent.name + '/'))
        } else {
            const svg:string = readFileSync(dir + dirent.name)
                .toString()
                .replace(clearReturn, '')
                .replace(svgTitle, ($1:string, $2:string) => {
                    let width:number = 0
                    let height:number = 0
                    let content:string = $2.replace(
                        clearHeightWidth,
                        (s1:string, s2:string, s3:number) => {
                            if (s2 === 'width') {
                                width = s3
                            } else if (s2 === 'height') {
                                height = s3
                            }
                            return ''
                        }
                    )
                    if (!hasViewBox.test($2)) {
                        content += `viewBox="0 0 ${width} ${height}"`
                    }
                    return `<symbol id="${camelize(dirent.name.replace('.svg',''))}" ${content}>`
                })
                .replace('</svg>', '</symbol>')
            svgRes.push({name:dirent.name.split('.svg')[0],svg:svg})
        }
    }
    return svgRes
}
