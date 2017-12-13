# Parcel 打包 React项目

整体感觉非常棒，无需配置，只需在开发或者打包的时候指定一个入口的html文件，便可完成对整个项目的打包工作

项目中集成了`react-router-dom` `swiper` `mobx` 

`swiper组件化使用`

目前仅开放环境可以调通，热更新和发布`parcel`还没完善

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

本地`http://localhost:3000`查看

## 资料

### 

### [Parcel gitHub](https://github.com/parcel-bundler/parcel)

### [中文文档](http://www.parceljs.io)

### [英文文档](https://parceljs.org/)

## 演示

[地址](https://topthinking.github.io/parcel-react/#/)

扫码查看

![](./doc/demo.png)

## 说明

>  本项目主要研究Parcel的使用，同时会加入一些前沿的技术研究demo

>  如果觉得不错的话，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

>  如有问题请直接在 Issues 中提，或者您发现问题并有非常好的解决方案，欢迎 PR 👍

## 需求

- [x] 文件结构
- [x] 代码拆分 通过`bundle.js`统一管理
- [x] 学习Swiper
- [x] 打包发布
- [x] 实现微信页面左右滑动，菜单颜色渐变的效果
- [x] 实现swiper组件化
- [x] mobx Demo `npm run mobx`

## ⚠️

css在引用图片资源时，用引号包裹起来，不包裹，`parcel`会不识别