import assert from 'assert';
import { validate } from '@/main'
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