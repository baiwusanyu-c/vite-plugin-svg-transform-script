/*
* @types.d.ts.ts
* @deprecated 
* @author czh
* @update (czh 2022/3/23)
*/
export declare interface ISvgTransScriptOption {
    input: string
    output?: string
    name?: string
    type?: string
    format?: string
}
export declare interface ISvgCtxItem {
    name: string
    svg: string
}
export interface ISVGDict {
    [key:string]:string
}
/*
export interface ISvgLoad {
    svgElm: SVGSVGElement
    isAllLoad:boolean
    svgDict:ISVGDict
    loadIconXML:()=>{}
    loadAllIconXML:()=>{}
    appendToBody:()=>{}
}*/
