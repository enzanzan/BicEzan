const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#1DA57A' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
    // babel: {
    //     plugins: [
    //         ['import', [{  // 导入一个插件
    //             libraryName: 'antd',   // 暴露的库名
    //             style: true // 直接将ants样式文件动态编译成行内样式插入，就不需要每次都导入
    //         }]]
    //     ],
    //     cacheDirectory: true,
    // },
}