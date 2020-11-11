import assert from 'assert';
import { validate } from '@/main'
import {numberSplitWithComma} from "../src/format";
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
  it('测试 numberSplitWithComma方法', ()=> {
    assert(numberSplitWithComma(123456789) === "123,456,789")
    assert(numberSplitWithComma('123456789') === "123,456,789")
    assert(JSON.stringify(numberSplitWithComma([1,2,3])) == JSON.stringify([1,2,3]))
  })
})
