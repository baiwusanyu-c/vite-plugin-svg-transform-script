# vite-plugin-svg-transform-script
Vite based SVG information reading plug-in can read iconfont's SVG icon file. It can specify input directory, output directory
Output the file name to generate a JS script file containing SVG information. Then you can use them to generate SVG icons.
## install
````
npm i vite-plugin-svg-transform-script
````
## use
### 1.Put static SVG resource file
You can directly save your SVG file into the assets / icon Folder,
Of course, you can also store it in other places, just make the corresponding folder path the most parameter
Just pass it on.
### 2.Write parameter configuration

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
  })
````
### 3.Restart your vite project
After you have finished configuring, restart the vite project, and the plug-in will automatically read the SVG file under the input path you specified, and generate the SVG file in the output directory you specified
Script file of SVG information
````
// svg-dict.js
export const content1 = <?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN".............. '
export const content2 = <?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN".............. '
````
## Api
|  Method name   |  explain   | parameter  | return value |
|  ---- |  ----  | ----  | ----  | 
| transformScript | Generate a script file based on the passed in configuration parameters| ISvgTransScriptOption | void |
|  findSvgFile |  Search SVG files in the specified folder according to the incoming parameters  | dir:String Svg file path| Array<{name:String,svg:String}><br>fileName：Humped SVG file name<br>svg:InnerHTML corresponding to SVG file| 
|  createFile |  Generate SVG script of specified directory according to the passed in parameters  | outputPath:String Specified output path<br>fileName:String Specified output file name <br>svgData:Array<{name:String,svg:String} Return value of 'findSvgFile' method| void|
## Interface
### ISvgTransScriptOption
|  key   |  explain   | default value  | required |
|  ---- |  ----  | ----  | ---  | 
| input | Enter the path to your SVG file| - | true |
| output | Output path, specifying the generated file path| path.resolve() |false|
| name | Specifies the name of the build file| 'svg-dict' |false|
| type | Specify the type of generated file. Please pass in 'ts' or' js'| 'ts' |false|
| format | Specify the export format. Please enter 'export' or 'default'| 'default' |false|


## other
#### 1.Since the script will generate variables according to the SVG file name, the file name cannot be the keyword of JavaScript, and the file name should use XXX Svg or XXX-YYY Svg format
#### 2.Be sure to pay attention to whether the input and output paths are correct