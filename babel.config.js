module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-proposal-class-properties',
        ["import", {
            "libraryName": "antd",
            "style": "css" // `style: true` 会加载 less 文件
        }]
    ]
}