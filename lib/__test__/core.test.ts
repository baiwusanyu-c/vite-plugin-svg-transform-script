/**
 * 测试props生效
 * @param options
 */
import {camelize} from "../utils/parser";
import {findSvgFile} from "../utils/svg-file-loader";
import path from 'path'
import {ISvgCtxItem} from "../index.d";
describe('vite-plugin-svg-transform-script', () => {
    test('test-camelize ', () => {
        const testStr = 'aaaa-vvvv'
        expect(camelize(testStr)).toBe('aaaaVvvv')
    })
    test('test-findSvgFile ', () => {
        const fileInfo:Array<ISvgCtxItem> = findSvgFile(path.resolve() + '/lib/__test__/')
        expect(fileInfo[0].name).toBe('account-book')
    })
})