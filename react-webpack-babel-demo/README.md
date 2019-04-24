# webpack + react + babel

## 运行

本地调试:

```
$ npm run dev
```

## webpack

- loader
- plugin

通过loader将相关的资源进行转换, 最后集成到页面中.

## React

组件的表现形式:

- (**推荐**)stateless functonal component(无状态函数式组件), 用于当组件没有内部的state时
- 继承自React.Component的类

组件的设计尽量遵循**最小化state的准则**,
无状态组件唯一要关心的事情就是渲染数据, 而带state的组件用于处理各种事件逻辑.

### 组件的元素

- props, 用于保存**外部**组件**传入**的属性
- state, 组件**内部**的属性, 可以通过setState触发再次调用render, 来重新进行渲染
- refs, 用于获取DOM中通过**ref指定**的组件
- key, 每个组件有一个唯一的key值, 为了保证重新渲染的效率, 提供Diff算法的效率

### 组件的生命周期

- 组件初始化, 初始化过程只执行一次
  1. getDefaultProps
  2. getInitialState
  3. componentWillMount
  4. render
  5. componentDidMount
- 组件的props更新
  1. componentWillReceiveProps
  2. shouldComponentUpdate, 如果为true, 继续后面的流程
  3. componentWillUpdate
  4. render
  5. componentDidUpdate
- 组件卸载
  - componentWillUnmount

### Virtual DOM

React采用了Virtual DOM这个技术来提供渲染时的效率.

ReactElement是一种使用JavaScript描述的轻量级的, 无状态的, 不可改变的, DOM元素的虚拟表示,
而JSX就是一直一种构建ReactElement的便捷写法, 通过render将其插入到真正的DOM中.

当任何更新发生时, 这些变更就会发生在Virtual DOM上, 这些操作都是对JavaScript对象进行操作, 所以速度很快.

生成新的Virutal DOM后会使用**Diff算法来得到差异**, 然后将差异作用到真正的DOM元素上.
通过这种方法让DOM操作最小化, 来提高效率.

### Flux

Flux是Facebook提出的一套前端应用架构模式, 核心是**单向数据流**.

![](./flux-workflow.png)

---
[Demo]: https://github.com/vikingmute/webpack-react-codes
[ECMAScript 6 入门]: http://es6.ruanyifeng.com/
[npm]: https://www.npmjs.com/
[webpack]: https://webpack.js.org/
[React]: https://zh-hans.reactjs.org/
[JavaScript DOM编程艺术]: https://book.douban.com/subject/6038371/
[Thinking in React]: https://reactjs.org/docs/thinking-in-react.html
[enzyme]: https://github.com/airbnb/enzyme