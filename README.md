# build-npm-package
使用 vite + ts 将导出内容打包成npm包
每次提交需要添加 dist 内容


# 使用说明
1.  添加package.json中的依赖   "new-stand-by": "xxxx.git",
2.  在js中使用  import {xxx} from "new-stand-by"
3.  如果有需要导入对应的css  @import "new-stand-by/dist/my-utils.css";


# 如果需要本地调试
# 假定npm包的目录名 = test-npm
1.  添加package.json中的依赖   "new-stand-by": "file:./test-npm/dist",
2.  在npm包的目录下运行 npm link
3.  在引入方的项目目录下运行   npm link test-npm
