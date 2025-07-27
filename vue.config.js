//var HardSourceWebpackPlugin = require("hard-source-webpack-plugin")

var moduleConfig = {
    lintOnSave: true
}

if (process.env.NODE_ENV == "production") {
    //moduleConfig.dll = true
    //moduleConfig.configureWebpack = {
        //devtool: false,
    //    plugins: [new HardSourceWebpackPlugin()]
    //}
}

module.exports = moduleConfig
