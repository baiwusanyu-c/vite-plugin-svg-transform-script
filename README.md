# vite-plugin-svg-transform-script
基于vite的svg信息读取插件，能够读取iconfont的svg图标文件，它能够根据指定输入目录，输出目录,
输出文件名称来生成包含有svg信息的js脚本文件。然后你就可以使用他们来生成svg的图标。
##安装
````
npm i vite-plugin-svg-transform-script
````
##使用
### 1.放入静态svg资源文件
你可以直接将你的svg文件存放入assets/icon文件夹内，  
当然你也可以存放在其他地方，只需要将对应文件夹路径最为参数  
传递即可。
### 2.编写参数配置
vite.config.ts 中传入配置对象使用
````
import {transformScript} from "vite-plugin-svg-transform-script";
export default defineConfig({
  plugins: [
    transformScript({
     input:'../assets/icon/',
     output:'../dist/',
     name:'svg-dict',
     type:'js',
     format:'export'
    })
  ]
  ....
  })


interface ISvgTransScriptOption {
    input: string // 输入路径，你的svg文件路径
    output?: string // 输出路径，指定生成的文件路径
    name?: string // 指定生成文件的名称
    type?: string // 指定生成文件的类型 ts / js
    format?: string // 指定导出格式 export / default
}
````
### 3.重启你的vite项目
当你做好配置后，重启vite项目，插件将自动读取你指定的输入路径下的svg文件，并在你指定的输出目录下生成包含有
svg信息的script文件
````
// svg-dict.js
export const content1 = <?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN".............. '
export const content2 = <?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN".............. '
````
##Api
|  方法名称   |  说明   | 参数  | 返回 |
|  ---- |  ----  | ----  | ----  | 
| transformScript | 根据传入配置参数生成脚本文件| ISvgTransScriptOption | void |
|  findSvgFile |  根据传入参数，搜索指定文件夹内svg文件  | dir:String svg文件路径| Array<{name:String,svg:String}><br>fileName：驼峰化的svg文件名<br>svg:对应svg文件的innerHTML| 
|  createFile |  根据传入参数，生成指定目录svg脚本  | outputPath:String 指定的输出路径<br>fileName:String 指定的输出文件名 <br>svgData:Array<{name:String,svg:String} findSvgFile的返回值| void|
##Interface
### ISvgTransScriptOption
|  key   |  说明   | 默认值  | required |
|  ---- |  ----  | ----  | ---  | 
| input | 输入路径，你的svg文件路径| - | true |
| output | 输出路径，指定生成的文件路径| path.resolve() |false|
| name | 指定生成文件的名称| 'svg-dict' |false|
| type | 指定生成文件的类型 请传入 'ts' 或 'js'| 'ts' |false|
| format | 指定导出格式，请传入 'export' 或 'default'| 'default' |false|


##其他
#### 1.由于脚本会根据svg文件名生成变量,所以文件名不能是JavaScript的关键字，文件名应该使用XXX.svg 或 XXX-YYY.svg格式
#### 2.一定要注意输入和输出路径是否正确