import assert from 'assert'
import {formatDate, numberSplitWithComma, fillNumber, uniq, formatDateBy, changeToOptions} from "../src/format"
import {isMobile, isEmail, isPhone, isCardId} from "../src/validate"
describe('src/validata', () => {
    it('测试 isMobile 方法', () => {
        assert(isMobile !== undefined)
        assert(isMobile(18888888888) === true)
        assert(isMobile('18888888888') === true)
        assert(isMobile(11111) === false)
        assert(isMobile('11111') === false)
        assert(isMobile('0752-88888888') === false)
        assert(isMobile('0752-8888888') === false)
    })
    it('测试 isEmail 方法',() => {
        assert(isEmail('635263@qq.com') === true)
        assert(isEmail('635263@163.com') === true)
        assert(isEmail('635263@foxmail.com') === true)
        assert(isEmail('12334') === false)
    })
    it('测试 isPhone 座机号码方法', () => {
        assert(isPhone('0713-2121222') === true)
        assert(isPhone('027-2121222') === true)
        assert(isPhone('18888888888') === false)
    })
    it('测试 isCardId 身份证号码校验方法', () => {
        assert(isCardId(421122199001012222) === true)
        assert(isCardId(421122199001012) === true)
        assert(isCardId('42112219900101222x') === true)
    })
    // it('测试 isUrl 网址校验方法', () => {
    //     assert(isUrl('http://182.20.20.20:8080') === false)
    //     assert(isUrl('https://www.baidu.com') === true)
    //     assert(isUrl('http://172.20.155.102:8017/#/goods/approval') === false)
    //     assert(isUrl('https://blog.lindexi.com/post/dotnet') === false)
    //     assert(isUrl('http://gitlab.skysri.com/dashboard/projects') === false)
    // })
})
describe('src/format',()=> {
    it('测试 numberSplitWithComma方法', ()=> {
      assert(numberSplitWithComma(123456789) === "123,456,789")
      assert(numberSplitWithComma('123456789') === "123,456,789")
      assert(JSON.stringify(numberSplitWithComma([1,2,3])) == JSON.stringify([1,2,3]))
    })
    it('测试 formatDate方法', ()=> {
      assert(formatDate(new Date(),'yyyy/MM/dd') === formatDateBy(new Date(),'yyyy/MM/dd'))
      assert(formatDate(new Date(),'yyyy-MM-dd') === formatDateBy(new Date(),'yyyy-MM-dd'))
      assert(formatDate('2020/5/30','yyyy-MM-dd') === '2020-05-30')
      assert(formatDate('2020/05/02','yyyy-MM-dd') === '2020-05-02')
    })
    it('测试 numberSplit方法', ()=> {
      assert(fillNumber(123456789,4,',') === '1,2345,6789')
      assert(fillNumber(123456789,3,' ') === '123 456 789')
      assert(fillNumber('jasgdjshagdjsa',4,'|') === 'jasgdjshagdjsa')
      assert(fillNumber(123456789) === '123,456,789')
    })
    it('测试 uniq方法', ()=> {
      assert(uniq([1,2,2,3,4,5]).toString() === [1,2,3,4,5].toString())
      assert((uniq([{id: 1,name: '1'},{id: 1,name: '1'},{id: 2,name: '2'},{id: 2,name: '2'}],'id')).toString() === ([{id: 1,name: '1'},{id: 2,name: '2'}]).toString())
    })
    it('测试 changeToOptions方法', ()=> {
        assert((changeToOptions([{id: 1,name: '影视'},{id: 2,name: '教育'},{id: 3,name: '体育'}],'name','id')).toString() === ([{label: '影视',value: 1},{label: '教育',value: 2},{label: '体育',value: 3}]).toString())
    })
})
