import assert from 'assert';
import ccUtils, { format, validate } from '@/main'
describe('src/main', () => {
  it('测试方法库的导出方式是否正确', () => {
    assert(ccUtils !== undefined)
    assert(ccUtils.format !== undefined)
    assert(ccUtils.validate !== undefined)
    assert(format !== undefined)
    assert(validate !== undefined)
  })
})
