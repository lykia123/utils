import assert from 'assert';
import { validate } from '@/main'
import {formatDate, numberSplitWithComma, fillNumber, uniq} from "../src/format";
describe('src/validata', () => {
  const { isMobile } = validate
  it('测试 isMobile 方法', () => {
    assert(isMobile !== undefined)
    assert(isMobile(18888888888) === true)
    assert(isMobile('18888888888') === true)
    assert(isMobile(11111) === false)
    assert(isMobile('11111') === false)
    assert(isMobile('0752-88888888') === false)
    assert(isMobile('0752-8888888') === false)
  })
})
describe('src/format',()=> {
    it('测试 numberSplitWithComma方法', ()=> {
      assert(numberSplitWithComma(123456789) === "123,456,789")
      assert(numberSplitWithComma('123456789') === "123,456,789")
      assert(JSON.stringify(numberSplitWithComma([1,2,3])) == JSON.stringify([1,2,3]))
    })
    it('测试 formatDate方法', ()=> {
      assert(formatDate(new Date(),'yyyy/MM/dd') === '2020/12/07')
      assert(formatDate(new Date(),'yyyy-MM-dd') === '2020-12-07')
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
})
