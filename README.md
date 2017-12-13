# webpack-build-yarn

### 安装环境

* node.js ```^8.0.0``` [https://nodejs.org](https://nodejs.org)
* yarn ```^1.0.0```  [https://yarnpkg.com](https://yarnpkg.com)

### 编辑器

* 强烈推荐 **WebStorm**
	* 如果使用 WebStorm , .editorconfig 将自动与其关联，然后只需打开 Setting =>
Languages & Frameworks => JavaScript => Code Quality Tools => ESLint ,将 Enable 选中, .eslintrc.js 即可与 WebStorm 正常关联

* 如果是其他编辑器
	1. 为使 ```.editorconfig``` 正常使用，请 [点击链接](http://editorconfig.org/#download) 查看本编辑器是否需要下载插件，如需下载，请按要求安装
	2. 为使 ```.eslintrc.js``` 正常使用，请 [点击链接](http://eslint.cn/docs/user-guide/integrations) 查看本编辑器与 .eslintrc.js 的集成方法

### 启动项目

* 进入项目根目录，安装项目依赖

```sh
yarn
```

* 运行项目

```sh
yarn start
```

* 打包项目

```sh
yarn build
```

* 代码检查

```sh
yarn lint
```
