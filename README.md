# Parcel 打包 React项目

项目中集成了`react-router-dom` `swiper`

## 快速体验
```shell
yarn global add parcel-bundler

#or

npm install -g parcel-bundler

```
```shell

npm install

npm run dev
```

本地`http://localhost:1234`查看

### [Parcel gitHub](https://github.com/parcel-bundler/parcel)

### [中文文档](http://www.parceljs.io)

### [英文文档](https://parceljs.org/)

### 需求

- [x] 文件结构
- [x] 代码拆分 通过`bundle.js`统一管理
- [x] 学习Swiper
- [ ] 打包发布

### ⚠️  注意

css在引用图片资源时，用引号包裹起来，不包裹，`parcel`会不识别