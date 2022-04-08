/*
* @load-svg.ts
* @deprecated 
* @author czh
* @update (czh 2022/4/7)
*/
import {ISVGDict} from "../types/types";

 export class SVGLoadInstance {
  private svgElm: SVGSVGElement
  private isAllLoad:boolean = true
  private svgDict:ISVGDict
  constructor(svgDict:ISVGDict,isAll = true) {
    this.svgDict = svgDict
    this.svgElm = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    this.svgElm.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    this.svgElm.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink')
    this.svgElm.style.position = 'absolute'
    this.svgElm.style.width = '0'
    this.svgElm.style.height = '0'
    if (isAll) {
      this.isAllLoad = isAll
      this.loadAllIconXML()
    }
  }
  loadIconXML(name: string): void {
    if (this.isAllLoad) return
    this.svgElm.innerHTML = this.svgElm.innerHTML + this.svgDict[name]
    this.appendToBody()
  }
  loadAllIconXML(): void {
    Object.keys(this.svgDict).forEach((key: string) => {
      this.svgElm.innerHTML = this.svgElm.innerHTML + this.svgDict[key]
    })
    this.appendToBody()
  }
  appendToBody(): void {
    document.body.insertBefore(this.svgElm, document.body.firstElementChild)
  }
}

export const loadSvg = (svgDict:ISVGDict):SVGLoadInstance =>{
  return new SVGLoadInstance(svgDict)
}