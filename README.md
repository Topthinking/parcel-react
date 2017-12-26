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
- [x] 打包发布
- [x] swiper组件化，封装swiper.js了
- [x] mobx `npm run mobx` &middot; `http://localhost:3000`

## ⚠️

css在引用图片资源时，用引号包裹起来，不包裹，`parcel`会不识别

##  mobx使用方式

    主要做到的是所用即创建的道理，减少不必要的内存消耗

1.全局的store使用，可以直接在store里面返回一个实例化的对象，那么在每个子组件需要的地方直接import使用

2.父子数据通信store的使用，请在父组件的构造函数中进行store的实例化操作，使用`mobx-react`的`Provider`进行数据的传递，那么在子组件中使用`inject`获取store对象来通过`props`操作数据