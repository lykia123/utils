import assert from 'assert';
import ccUtils, { format, validate, coocaaKeyMap } from '@/main'
describe('src/main', () => {
  it('测试方法库的导出方式是否正确', () => {
    assert(ccUtils !== undefined)
    assert(ccUtils.format !== undefined)
    assert(ccUtils.validate !== undefined)
    assert(ccUtils.coocaaKeyMap !== undefined)
    assert(format !== undefined)
    assert(validate !== undefined)
    assert(coocaaKeyMap !== undefined)
  })
})