const path = require('path')

module.exports = {
    base: '/utils/',
    title: 'Utils',
    description: '酷开方法库',

    themeConfig: {
        nav: [
            {text: '文档', link: '/'},
            {text: 'Changelog', link: 'http://gitlab.skysri.com/flower/utils/blob/dev/CHANGELOG.md'},
            {text: 'Gitlab', link: 'http://gitlab.skysri.com/flower/utils.git'}
        ],
        locales: {
            '/': {
                lang: 'zh-CN', //将会被设置为<html>的lang属性
                sidebar: [
                    '/',
                    {
                        title: '格式化方法',
                        collapsable: false,
                        children: [
                            'components/Format/fillNumber.md',
                            'components/Format/formatDate.md',
                            'components/Format/uniq.md',
                            'components/Format/changeToOptions.md',
                            'components/Format/dateDiff.md',
                        ]
                    },
                    {
                        title: '校验方法',
                        collapsable: false,
                        children: [
                            'components/Validate/isMobile.md',
                            'components/Validate/isEmail.md',
                            'components/Validate/isPhone.md',
                            'components/Validate/isCardId.md',
                            'components/Validate/isNumRange.md',
                            'components/Validate/isJson.md'
                        ]
                    }
                ]
            }
        }
    }
}

console.log(path.resolve(__dirname, '../../srcc'))
