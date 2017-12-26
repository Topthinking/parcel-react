
# React &middot; 技术栈

## 写在前面

主要通过`parcel`的无需配置的特点快速配置了和`react`相关的技术栈的demo

用来探索和研究`react`相关的技术

- [React-Demo](#集成的react项目demo)
- [Parcel](#parcel)

# 集成的React项目Demo

项目中集成了`redux` `mobx` `dva` `swiper` 等一系列的demo演示

所有demo都是使用`parcel`进行编译开发的

目前仅开放环境可以调通，热更新和发布`parcel`还没完善

## 需求

- [x] swiper组件化，封装swiper.js了
- [x] mobx `npm run mobx` &middot; `http://localhost:3001`
- [x] dva `npm run dva` &middot; `http://localhost:3003`

##  mobx使用方式

    主要做到的是所用即创建的道理，减少不必要的内存消耗

1.全局数据共享store的使用，可以直接在store里面返回一个实例化的对象，那么在每个子组件需要的地方直接import使用

2.父子组件数据共享store的使用，在store文件里面返回的是一个类，然后请在父组件的构造函数中进行store的实例化操作，使用`mobx-react`的`Provider`进行数据的传递，那么在子组件中使用`inject`获取store对象来通过`props`操作store中的数据

# Parcel

整体感觉非常棒，无需配置，只需在开发或者打包的时候指定一个入口的html文件，便可完成对整个项目的打包工作


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

### [Parcel gitHub](https://github.com/parcel-bundler/parcel)

### [中文文档](http://www.parceljs.io)

### [英文文档](https://parceljs.org/)

## 演示

[地址](https://topthinking.github.io/parcel-react/src/#/)

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


## ⚠️

css在引用图片资源时，用引号包裹起来，不包裹，`parcel`会不识别

