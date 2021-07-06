const path =require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')

// const {CleanWebpackPugin} = require('clean-webpack-plugin')

module.exports = {
    entry:'./src/index.ts',
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"bundle.js",

        // 告诉webpack不使用webpack,const(兼容老版本的IE浏览器！)
        environment:{
            arrowFunction:false,
            const :false
        }
    },


// 打包webppack 所需要的文件
    module:{
        rules:[
            // 设置同事文件处理！
            {
                test:/\.ts$/,
                use:[
                    //配置babel
                    {
                    // 指定加载器
                    loader:'babel-loader',
                    // 设置babel
                        options:{
                            // 设置预定义的环境
                            presets:[
                                [
                                    // 指定环境插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 要兼容的目标浏览器
                                        targets:{
                                            "chrome":"88",//兼容的版本
                                            "ie":"11"
                                        },
                                        // 指定corejs版本
                                        "corejs":"3",
                                        // 指定corejs的方式,"usage"表示按需加载。
                                        "useBuiltIns":"usage"

                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                // 要排除的文件
                exclude:/node_modules/
            },
            // 设置less文件的处理！
            {
                test:/\.less$/,
                use:[
                    // 执行顺序是从下往上执行的！
                    "style-loader",
                    "css-loader",
                    // 引入postcss
                    {
                        loader:"postcss-loader",
                        options:{
                            postcssOptions:{
                                plugins:[
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers:'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            }
        ]
    },
    // 配置webpack插件！
    plugins:[
        // new CleanWebpackPugin(),
        new HtmlWebpackPlugin({
            // 根据模板生成网页
            template:"./src/index.html"

        }),
    ],
    // 用来设置模块
    resolve:{
        // 设置以js,ts 结尾的文件当做模块来使用，不报错！
        extensions:['.ts','.js']
    }
    
}