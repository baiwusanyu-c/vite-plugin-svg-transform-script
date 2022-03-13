import {Plugin} from "vite";

declare function transformScript(options: ISvgTransScriptOption): Plugin

export default transformScript

export declare interface ISvgCtxItem {
    name: string
    svg: string
}

export declare interface ISvgTransScriptOption {
    input: string
    output?: string
    name?: string
    type?: string
    format?: string
}