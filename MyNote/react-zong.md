# 与三阶段无关

扩展运算符



# 如果知道脚手架项目是怎么启动的？

无论是vue还是react还是angular等这些项目 查看的方式  去项目下面的package.json文件中查看  scripts选项即可



# react的基本概念

## 虚拟DOM

# diff算法

详见ppt



## react的特点

声明式设计 −React采用声明范式，可以轻松描述应用。（开发者只需要声明显示内容，react就会自动完成）

高效 −React通过对DOM的模拟，最大限度地减少与DOM的交互。

灵活 −React可以与已知的库或框架很好地配合。

组件 − 通过 React 构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。（把页面的功能拆分成小模块--每个小模块就是组件）

单向数据流--　React是单向数据流，数据主要从父节点传递到子节点（通过props）。如果顶层（父级）的某个props改变了，React会重渲染所有的子节点



## React 组件特性



**React的核心就是组件：**组件的设计目的是提高代码复用率，降低测试难度和代码的复杂程度。
提高代码复用率：组件将数据和逻辑进行封装。

**降低测试难度：**组件高内聚低耦合（各个元素高集成度低关联性），很容易对单个组件进行测试。

**代码的复杂程度**：直观的语法，可以极大提高可读性。



灵活的组件化设计思想，可以让你的页面功能更具复用性。同时低耦合度的组件可以让功能之间的影响降到最低！

**组件就是:强 内 聚弱 耦 合的实现**



## 发展史

2013年6月，Facebook发布

2013年9月，受到热烈追捧

2015年3月，React Native发布（编写跨平台移动端页面)

## 兼容性

除去ie8以下版本，其余浏览器都可以很好的支持

## 需要自己去总结

reqct高效的原因:使用虚拟DOM，不直接操纵页面DOM，减少页面重绘次数。同时使用DOM diff算法，最小化的减少对页面重绘。

简述虚拟DOM

react 特点

请简述什么是React

请简述diff算法



# 开发环境搭建

## 依赖包

react.js文件是创建React元素和组件的核心文件，

react-dom.js文件用来把React组件渲染为DOM，此文件依赖于react.js文件，需在其后被引入。

Babel的主要用途是将ES6转成ES5 同时可以把JSX 语法转换新标准的JavaScript代码让现今浏览器兼容的代码



下载： npm install --save **react react-dom** **babel-standalone** 

使用:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 在引包的时候顺序不能乱  先react 在react-dom 在babel -->
    <script src="node_modules/react/umd/react.development.js"></script>
    <script src="node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="node_modules/babel-standalone/babel.js"></script>
</head>
<body>
    
</body>
</html>
```



基本helloword

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 在引包的时候顺序不能乱  先react 在react-dom 在babel -->
    <script src="node_modules/react/umd/react.development.js"></script>
    <script src="node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="node_modules/babel-standalone/babel.js"></script>
</head>
<body>

    <!-- 设置一个根 这个根里面就是被react所管理的区域 -->
    <div id="demodiv">

    </div>
    <!-- 这里有个坑 -->
    <!-- 千万不要忘了 -->
    <script type="text/babel">
        let newhtml=<h1>你好么么哒</h1>
        ReactDOM.render(newhtml,document.querySelector("#demodiv"))
    </script>
</body>
</html>
```



# jsx

当遇到<，JSX就当HTML解析，遇到{就当JavaScript解析。

JSX=javascript xml就是Javascript和XML结合的一种格式。是JavaScript 的语法扩展。 React推荐在 React 中使用 JSX 来描述用户界面。当遇到<，JSX就当HTML解析，遇到{就当JavaScript解析。

jsx优点：

JSX 执行更快，因为它在编译为 JavaScript 代码后进行了优化。

它是类型安全的，在编译过程中就能发现错误。

使用 JSX 编写模板更加简单快速。



## jsx坑

### 坑1：jsx中必须严格按照w3c规范来写

html的标签必须闭合   

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 在引包的时候顺序不能乱  先react 在react-dom 在babel -->
    <script src="node_modules/react/umd/react.development.js"></script>
    <script src="node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="node_modules/babel-standalone/babel.js"></script>
</head>
<body>

  
    <div id="demodiv">
        <!-- <h1>你好么么哒<h1> -->
    </div>
    <script type="text/babel">

        let el=(
            <div>
                <h1>我是测试jsx的</h1>  
                <br/>
                <input type="text"/>  
            </div>
        )
        ReactDOM.render(el,document.getElementById("demodiv"))
    </script>
</body>
</html>
```

### 坑2 表格的坑

在写表格的时候不要忘了tbody theader tfoot

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 在引包的时候顺序不能乱  先react 在react-dom 在babel -->
    <script src="node_modules/react/umd/react.development.js"></script>
    <script src="node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="node_modules/babel-standalone/babel.js"></script>
</head>
<body>

  
    <div id="demodiv">
        <!-- <h1>你好么么哒<h1> -->
           
    </div>
    <script type="text/babel">


        // 坑2 表格的坑
        let el=(
            <table>
                <tbody>
                         <tr>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                        </tr>
                        <tr>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                        </tr>
                        <tr>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                        </tr>    
                </tbody>
            </table>
        )

        ReactDOM.render(el,document.getElementById("demodiv"))
    </script>
</body>
</html>
```

### 坑3  多行标签必须要有父容器包裹

### 坑4 注释

注释的语法是在jsx中使用      {/* 你的注释内容 */}

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 在引包的时候顺序不能乱  先react 在react-dom 在babel -->
    <script src="node_modules/react/umd/react.development.js"></script>
    <script src="node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="node_modules/babel-standalone/babel.js"></script>
</head>
<body>

  
    <div id="demodiv">

           
    </div>
    <script type="text/babel">
        let el=(
           <div>
                <h1>aaaa</h1>
               {/*我是一个注释*/}
                <h1>aaaa</h1>
                <h1>aaaa</h1>
            </div>
        )

      

        ReactDOM.render(el,document.getElementById("demodiv"))
    </script>
</body>
</html>
```

## jsx的使用以及数据绑定

js框架主要就是为了解决数据绑定问题的

### jsx绑定变量

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 在引包的时候顺序不能乱  先react 在react-dom 在babel -->
    <script src="node_modules/react/umd/react.development.js"></script>
    <script src="node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="node_modules/babel-standalone/babel.js"></script>
</head>
<body>

    <!-- 设置一个根 这个根里面就是被react所管理的区域 -->
    <div id="demodiv">

    </div>

    <script type="text/babel">

        let text="我是一个字符串"
        // 除了字符串以外其他类型怎么办？
        let num=999;
        let bool=true;
        let arr=[1111,22222,333333];
        let obj={
            name:"xixi"
        }

        let newhtml=(
            <div>
                <h1>{text}</h1>    
                <h1>{num}</h1>   
                {/*布尔值不像vue能显示  react中不显示*/}
                <h1>111{bool?'真':'假'}</h1>    
                <h1>{arr[1]}</h1>    
                <h1>{obj.name}</h1>    
            </div>
        )
            
        ReactDOM.render(newhtml,document.querySelector("#demodiv"))
    </script>
</body>
</html>
```

### jsx中也可以绑定函数

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 在引包的时候顺序不能乱  先react 在react-dom 在babel -->
    <script src="node_modules/react/umd/react.development.js"></script>
    <script src="node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="node_modules/babel-standalone/babel.js"></script>
</head>
<body>

    <!-- 设置一个根 这个根里面就是被react所管理的区域 -->
    <div id="demodiv">

    </div>

    <script type="text/babel">

        function fun(){
            return 111
        }


        let newhtml=(
            <div>
                {/*因为花括号是js解析所以返回的是函数的返回值*/}
                
                {fun()}
            </div>
        )
            
        ReactDOM.render(newhtml,document.querySelector("#demodiv"))
    </script>
</body>
</html>
```

## 外置js文件

工作中不会用到了解即可

原来老田 说过html文件就是写html的   css文件就是写css的   js同理



所以我们可以写在外部  但是引用的使用必须加 type

```html
    <script src="index.js" type="text/babel"></script>
```



## jsx属性插变量

在vue中属性插变量   使用v-bind或者：

在react中没有指令这个东西 所以react中属性插变量使用  {}

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 在引包的时候顺序不能乱  先react 在react-dom 在babel -->
    <script src="node_modules/react/umd/react.development.js"></script>
    <script src="node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="node_modules/babel-standalone/babel.js"></script>
</head>
<body>
    <div id="demodiv">

    </div>

    <script type="text/babel">
    let text="点我去百度";
    let ahref="http://www.baidu.com";
        let newhtml=(
            <div>
              {/*属性差变量不要双引号 用{包裹数据}*/}  
                 <a href={ahref}>{text}</a> 
            </div>
        )
            
        ReactDOM.render(newhtml,document.querySelector("#demodiv"))
    </script>
</body>
</html>
```

## jsx中修改样式

### 行内样式

style属性的方式来修改  贼哦恶心

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 在引包的时候顺序不能乱  先react 在react-dom 在babel -->
    <script src="node_modules/react/umd/react.development.js"></script>
    <script src="node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="node_modules/babel-standalone/babel.js"></script>
</head>
<body>

    <div id="demodiv">

    </div>

    <script type="text/babel">
        let newhtml=(
            <div>
                {/*
                在jsx中如果想使用行内样式修改 那么必须是一个对象
                style={{}} 不要看着是两个{{}}
                外面一层是jsx解析的语法
                里面一层是对象的语法
                --------------------------------
                如果样式有-  那么-取消后面单词转大写

              */}
               <p style={{color:'red',backgroundColor:"pink"}}>使用style属性修改我的样式</p>
            </div>
        )
            
        ReactDOM.render(newhtml,document.querySelector("#demodiv"))
    </script>
</body>
</html>
```



### class

因为class是js 类的关键字  所以在jsx中如果想给一个html起类名  千万不要用class  一定要用className

因为class是js 类的关键字  所以在jsx中如果想给一个html起类名  千万不要用class  一定要用className

因为class是js 类的关键字  所以在jsx中如果想给一个html起类名  千万不要用class  一定要用className

因为class是js 类的关键字  所以在jsx中如果想给一个html起类名  千万不要用class  一定要用className

因为class是js 类的关键字  所以在jsx中如果想给一个html起类名  千万不要用class  一定要用className

因为class是js 类的关键字  所以在jsx中如果想给一个html起类名  千万不要用class  一定要用className

因为class是js 类的关键字  所以在jsx中如果想给一个html起类名  千万不要用class  一定要用className



## 其他规则

jsx规则扩展：

1.html的value属性要写成：defaultValue
2.html的checked属性要写成：defaultChecked
3.style 里面写对象
4.class 写className



# react 列表便利数组

## map方式

### 方式1

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 在引包的时候顺序不能乱  先react 在react-dom 在babel -->
    <script src="node_modules/react/umd/react.development.js"></script>
    <script src="node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="node_modules/babel-standalone/babel.js"></script>
</head>
<body>
    <div id="demodiv">

    </div>

    <script type="text/babel">
        let arr=[111,2222,3333,4444,56555]

        let newhtml=(
            <div>
                <ul>
                
                    {
                        arr.map((v,i)=>{
                            return (
                                <li key={i}>{v}</li>
                            )
                        })
                    }
                    
                </ul>
            </div>
        )
            
        ReactDOM.render(newhtml,document.querySelector("#demodiv"))
    </script>
</body>
</html>
```

### 方式2

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 在引包的时候顺序不能乱  先react 在react-dom 在babel -->
    <script src="node_modules/react/umd/react.development.js"></script>
    <script src="node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="node_modules/babel-standalone/babel.js"></script>
</head>
<body>
    <div id="demodiv">

    </div>

    <script type="text/babel">
        let arr=[111,2222,3333,4444,56555]

        let newel=arr.map((v,i)=>{
                            return (
                                <li key={i}>{v}</li>
                            )
                        })

        let newhtml=(
            <div>
                <ul>
                    {newel}
                    
                </ul>
            </div>
        )
            
        ReactDOM.render(newhtml,document.querySelector("#demodiv"))
    </script>
</body>
</html>
```

## 其他便利方式

详见ppt 39p



# react列表便利对象

对象取值有两种方式 1.用点的方式 2.用[]来取值


在实际项目中一般使用点，会方便许多，但是如果key是变量的话就不能使用点了，js会理解变量为对象的key值，造成混淆



object.keys()返回一个数组类型 值是方法中对象的键（key）


Object.values()返回一个数组类型 值是方法中对象的值（value）


Object.entries()返回一个数组类型 值是方法中对象的键和值

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        let obj={
            name:"xixi",
            age:18
        }
        // console.log(obj.name)

        // let newage="age"
        // // 如果取值的时候是变量那么就要用[]
        // console.log(obj[newage])


        console.log(Object.keys(obj))
        console.log(Object.values(obj))
        console.log(Object.entries(obj))
    </script>
</body>
</html>
```

## 开始便利对象

```hrml
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="node_modules/react/umd/react.development.js"></script>
    <script src="node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="node_modules/babel-standalone/babel.js"></script>
</head>
<body>
    <div id="demodiv">

    </div>
    <script type="text/babel">
        let obj={
            name:"xixi",
            age:18,
            sex:"男"
        }

        let newel=Object.values(obj).map((v,i)=>{
            return (
                <li key={i}>{v}</li>
            )
        })

        let newbel=Object.keys(obj).map((v,i)=>{
            return (
                <li key={i}>{obj[v]}</li>
            )
        })

        let newhtml=(
            <div>
                <ul>
                    {
                        newel
                    }
                    {
                        newbel
                    }
                </ul>  
            </div>
        )
            
        ReactDOM.render(newhtml,document.querySelector("#demodiv"))
    </script>
</body>
</html>
```

# render重新渲染

就是在页面发生改变的时候  必须调用render这方法才会让改变的结果展现在页面中

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="node_modules/react/umd/react.development.js"></script>
    <script src="node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="node_modules/babel-standalone/babel.js"></script>
</head>
<body>
        <div id="demodiv"></div>
        <script type="text/babel">
        // 点击变色
        // 1.样式修改  className   style-={{}}
        // 2.怎么点击？
        // react中事件   用驼峰命名法    onclick----》onClick   onchange===》onChange
        // 3.怎么根据我点的内容改变对应行数呢？
        // 可以在默认的时候创建一个用于保存用户点击行数的变量

            let arr=["EZ","VN","MF","NOC"];
            let num=-99
            function el(){
                let newhtml=arr.map((v,i)=>{
                    return (
                        // 通过行内样式改变样式
                        <h1 key={i} onClick={()=>{num=i;console.log(num);render()}} style={{backgroundColor:num==i?"pink":''}}>{v}</h1>
                    )
                })
                return newhtml
            }
            
            // render渲染 
            // 由于render在初始化的时候执行了一次   
            // 在后续我们想修改内容的时候render没有执行那么就导致页面内容没有进行重新的渲染
            // 显然页面就不会改变

            // render重新渲染（尽在当前知识点储备下有用  后面学到state的时候就没有用了）
          function render(){
            ReactDOM.render(el(),document.getElementById("demodiv"))
          }
           render()
        </script>
</body>
</html>
```



# 组件

组件的本质是什么？

自定义标签    



## 扩展小概念

组件与组件化

组件 ：用来封装可以重复使用的ui代码块  并且由强内聚弱耦合的特性

组件化：整个项目都是由组件写的就是组件化

模块与模块化

模块：用来封装可以重复使用的js代码块

模块化：整个项目都是由模块写的就是模块化

## react组件

### 函数组件/无状态组件

#### 语法

组件 **首字母大写 首字母大写 首字母大写**并且**其后每个字母首字母大写**

组件 **首字母大写 首字母大写 首字母大写**并且**其后每个字母首字母大写**

组件 **首字母大写 首字母大写 首字母大写**并且**其后每个字母首字母大写**

组件 **首字母大写 首字母大写 首字母大写**并且**其后每个字母首字母大写**

组件 **首字母大写 首字母大写 首字母大写**并且**其后每个字母首字母大写**

组件 **首字母大写 首字母大写 首字母大写**并且**其后每个字母首字母大写**

组件 **首字母大写 首字母大写 首字母大写**并且**其后每个字母首字母大写**

```js
function MyCom(){
	//必须有return  而且要return一段jsx
	return (
		jsx
	)
}
```

```js
  // 注意函数大小写
            function MyCom(){
                return (
                    <div>
                        我是一个组件么么哒！！！    
                    </div>
                )
            }
          
            ReactDOM.render(<MyCom/>,document.getElementById("demodiv"))
```

#### 嵌套组件/父子组件



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="node_modules/react/umd/react.development.js"></script>
    <script src="node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="node_modules/babel-standalone/babel.js"></script>
</head>
<body>
        <div id="demodiv"></div>
        <script type="text/babel">
            function Zi(){
                return (
                    <div>
                        zizizzizizizi    
                    </div>
                )
            }

            let Fu=()=>{
                return (
                    <div>
                        fuffufufufuffu
                        <Zi/>
                        
                    </div>
                )
            }
            ReactDOM.render(<Fu/>,document.getElementById("demodiv"))
        </script>
</body>
</html>
```



### class类组件

需要注意类名的首字母*必须大写*

需要注意类名的首字母**必须大写**

需要注意类名的首字母<u>必须大写</u>

需要注意类名的首字母~~必须大写~~

一个组件类必须必须必须要实现一个 render 方法。这个方法必须要返回一个jsx元素。必须要用一个外层的jsx元素把所有的内容包裹起来，返回并列的多个元素需要有个父元素包裹

```js
  class MyCom extends React.Component{
              render(){
                  return <div>我是组件</div>
              }
          }

```

react 类组件创建的方式：

class 加类名(但是类名首字母大写其后每个单词首字母大写)extends(继承)React.Component    在类中render方法return一段jsx

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="node_modules/react/umd/react.development.js"></script>
    <script src="node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="node_modules/babel-standalone/babel.js"></script>
</head>
<body>
        <div id="demodiv"></div>
        <script type="text/babel">
            class MyCom extends React.Component{
                render(){
                    return (
                        <div>
                            我是类组件    
                        </div>
                    )
                }
            }
            // 类组件怎么完成父子组件呢？

            class Fu extends React.Component{
                render(){
                    return (
                        <div>
                            ffufufufufufuf
                            <MyCom/>
                        </div>
                    )
                }
            }

            ReactDOM.render(<Fu/>,document.getElementById("demodiv"))
        </script>
</body>
</html>
```



## 组件传值正向------props

props 是组件对外的接口。使用props就可以从外部向组件内部进行数据传递 完成父组件传值给子组件
注意：Props对于使用它的组件来说，是只读的。一旦赋值不能修改。也就是说props的值是不可变的只能在渲染的时候传入无法动态赋值。

**组件无论是使用无状态组件还是通过 类组件声明，都决不能修改自身的 props**。

### 函数组件正向传值

#### 基本的props传值

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="node_modules/react/umd/react.development.js"></script>
    <script src="node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="node_modules/babel-standalone/babel.js"></script>
</head>
<body>
        <div id="demodiv"></div>
        <script type="text/babel">
        // 子组件需要接收父组件传递过来的数据
        // 子组件就需要在形参中定义props
            function Zi(props){
                return (
                    <div>
                        zizizzizizizi-----{props.xiaoming}
                    </div>
                )
            }
            let Fu=()=>{
                return (
                    <div>
                        fuffufufufuffu
                       {/*在子组件被调用的时候传递数据*/}
                        <Zi xiaoming="传递的数据"/>
                        
                    </div>
                )
            }
            ReactDOM.render(<Fu/>,document.getElementById("demodiv"))
        </script>
</body>
</html>
```

#### props验证

 自 React v15.5 起，`React.PropTypes` 已移入另一个包中。请使用 [`prop-types` 库](https://www.npmjs.com/package/prop-types) 代替。 

要进行验证   npm install --save prop-types

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="node_modules/react/umd/react.development.js"></script>
    <script src="node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="node_modules/babel-standalone/babel.js"></script>
    <script src="node_modules/prop-types/prop-types.js"></script>
</head>
<body>
        <div id="demodiv"></div>
        <script type="text/babel">
            function Zi(props){
                return (
                    <div>
                        zizizzizizizi-----{props.xiaoming}
                    </div>
                )
            }
            // propTypes验证
            // 组件名.propTypes={
            //     验证内容:PropTypes.数据类型
            // }
            Zi.propTypes={
                xiaoming:PropTypes.string
            }
            let Fu=()=>{
                let bool="111111";
                return (
                    <div>
                        fuffufufufuffu
                        <Zi xiaoming={bool}/>
                        
                    </div>
                )
            }
            ReactDOM.render(<Fu/>,document.getElementById("demodiv"))
        </script>
</body>
</html>
```

#### props默认值---defaultProps

```
组件名.defaultProps={
	props值:"默认值"
}
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="node_modules/react/umd/react.development.js"></script>
    <script src="node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="node_modules/babel-standalone/babel.js"></script>
</head>
<body>
        <div id="demodiv"></div>
        <script type="text/babel">
            function Zi(props){
                return (
                    <div>
                        zizizzizizizi-----{props.xiaoming}
                    </div>
                )
            }

            Zi.defaultProps={
                xiaoming:"我是默认值"
            }

            let Fu=()=>{
                return (
                    <div>
                        fuffufufufuffu
                        <Zi xiaoming="我是传递的数据"/>
                        
                    </div>
                )
            }
            ReactDOM.render(<Fu/>,document.getElementById("demodiv"))
        </script>
</body>
</html>
```





### 类组件正向传值

#### 传值

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="node_modules/react/umd/react.development.js"></script>
    <script src="node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="node_modules/babel-standalone/babel.js"></script>
</head>
<body>
        <div id="demodiv"></div>
        <script type="text/babel">
            class MyCom extends React.Component{
                render(){
                    // 推荐大家使用{}方式
                    
                    let {xiaominga,xiaomingb,xiaomingc}=this.props

                    return (
                        <div>
                            {/*类组件在接收props的时候直接使用this.props.xxx*/}
                            我是类组件---{xiaominga} 
                            我是类组件---{xiaomingb} 
                            我是类组件---{xiaomingc} 
                        
                        </div>
                    )
                }
            }
          let el=<MyCom xiaomingb="我是参数"/>

            ReactDOM.render(el,document.getElementById("demodiv"))
        </script>
</body>
</html>
```

#### props验证与默认值

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="node_modules/react/umd/react.development.js"></script>
    <script src="node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="node_modules/babel-standalone/babel.js"></script>
</head>
<body>
        <div id="demodiv"></div>
        <script type="text/babel">
            class MyCom extends React.Component{
                render(){
                    let {xiaominga}=this.props
                    return (
                        <div>
                            我是类组件---{xiaominga} 
                        </div>
                    )
                }
            }

            MyCom.defaultProps={
                xiaominga:"我是默认值"
            }
            // props验证同函数组件
          let el=<MyCom xiaominga="我是参数"/>

            ReactDOM.render(el,document.getElementById("demodiv"))
        </script>
</body>
</html>
```

# state状态

状态==数据



注意 ：默认情况下在函数组件中不能使用状态（后期会有其他方式来实现）

react中组件定义状态数据使用   state

## 创建：

  需要在constructor中使用   this.state={}来创建

## 使用:  

   在想展示的地方使用   this.state.xxx来进行使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="node_modules/react/umd/react.development.js"></script>
    <script src="node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="node_modules/babel-standalone/babel.js"></script>
</head>
<body>
    <div id="demodiv"></div>
    <script type="text/babel">
        // 定义一个类组件
        // 定义一个状态（数据）
    

        class Mycom extends React.Component{
            constructor(props){
                super(props)
                // 定义状态
                this.state={
                    text:"我是一个字符串",
                    num:19,
                    bool:true,
                    arr:[111,2222,3333,4444,5555]
                }
                
            }
            render(){
                // 使用的时候发现有太多重复的this。state  那么我们可以使用对象解构
                let {text,num,bool,arr}=this.state
                return (
                    <div>
                       类组件
                       {/*使用*/}
                       <h1>{this.state.text}</h1>
                       <h1>{this.state.num}</h1>
                       <h1>{this.state.bool?"真":"假"}</h1>
                       <h1>{this.state.arr[2]}</h1>
                       <h1>解构</h1>
                       <h1>{text}</h1>
                       <h1>{num}</h1>
                       <h1>{bool?"真":"假"}</h1>
                       <h1>{arr[2]}</h1>
                    </div>
                )
            }
        }
      


        ReactDOM.render(<Mycom/>,document.getElementById("demodiv"))
    </script>
</body>
</html>
```

## 修改



使用this.setState({})进行数据的修改

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="node_modules/react/umd/react.development.js"></script>
    <script src="node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="node_modules/babel-standalone/babel.js"></script>
</head>
<body>
    <div id="demodiv"></div>
    <script type="text/babel">
 

        class Mycom extends React.Component{
            constructor(props){
                super(props)
                this.state={
                    text:"我是一个字符串"
                }  
            }
            // 必须要写箭头函数否自this会有问题
            fun=()=>{
                // 我要修改state的数据
                // 使用this.setState({key：val})
                this.setState({
                    text:"我被改了"
                })
            }
            render(){
                return (
                    <div>
                       <h1>{this.state.text}</h1>
                       {/*不加()不加()不加() 加了就默认执行了*/}
                       {/*不加()不加()不加() 加了就默认执行了*/}
                        <button onClick={this.fun}>点我修改数据</button>
                    </div>
                )
            }
        }
      


        ReactDOM.render(<Mycom/>,document.getElementById("demodiv"))
    </script>
</body>
</html>
```

## state小扩展

1.为什么调用了setState之后页面数据就改变了呢？

因为setState会自动触发render来进行页面的渲染

2.setState是异步的？

因为是异步的那么他就会有回调函数

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="node_modules/react/umd/react.development.js"></script>
    <script src="node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="node_modules/babel-standalone/babel.js"></script>
</head>
<body>
    <div id="demodiv"></div>
    <script type="text/babel">
 

        class Mycom extends React.Component{
            constructor(props){
                super(props)
                this.state={
                    text:"我是一个字符串"
                }  
            }
            fun=()=>{
                this.setState({
                    text:"我被改了"
                },()=>{
                    // 这个就是setState的回调函数 他会在修改数据之后自动执行
                    console.log(this.state.text)
                })
                // 上面是state的修改如果是同步的那么我在修改之后打印肯定是修改之后的数据
                // 但是我们打印的确实修改之前的  那么这样子就应征了  setState是异步的

                // 但是在业务开发的时候很多时候会用到在修改数据之后直接使用修改之后的值
                // setstate是异步的  只要是异步操作  都会有回调函数
                // console.log(this.state.text)
            }
            render(){
                return (
                    <div>
                       <h1>{this.state.text}</h1>
                        <button onClick={this.fun}>点我修改数据</button>
                    </div>
                )
            }
        }
      


        ReactDOM.render(<Mycom/>,document.getElementById("demodiv"))
    </script>
</body>
</html>
```

# 扩展--插入字符串标签

dangerouslySetInnerHTML = {{ __html:你要插入的字符串 }}

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="node_modules/react/umd/react.development.js"></script>
    <script src="node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="node_modules/babel-standalone/babel.js"></script>
</head>
<body>
    <div id="demodiv"></div>
    <script type="text/babel">
        class Mycom extends React.Component{
            constructor(props){
                super(props)

                this.state={
                    newhtml:"<em>我是斜体</em>"
                }
            }
            render(){
                let {newhtml}=this.state
                return (
                    <div>
                        <h1>我要插入一段字符串html</h1>    
                        {newhtml}
                        {/*默认直接读取会把标签当字符串展示*/}
                        <div dangerouslySetInnerHTML={{__html:newhtml}}>
                        
                        </div>
                    </div>
                )
            }
        }

     
        ReactDOM.render(<Mycom/>,document.getElementById("demodiv"))
    </script>
</body>
</html>
```

# 受控组件

React负责渲染表单的组件。同时仍然控制用户后续输入时所发生的变化。值是来自于state控制的 输入表单元素称为“受控组件”。





# React组件生命周期

## React 生命周期--挂载阶段

constructor()中完成了React数据的初始化，

componentWillMount()一般用的比较少，它更多的是在服务端渲染时使用。它代表的过程是组件已经经历了constructor()初始化数据后，但是还未渲染DOM时。

render（）进行dom渲染

componentDidMount()
组件第一次渲染完成，此时dom节点已经生成，可以在这里调用ajax请求，返回数据setState后组件会重新渲染

componentWillUnmount在组件从 DOM 中移除之前立刻被调用。



  

# ref

React提供的这个ref属性(**不能在无状态组件上使用 ref 属性**，因为它们没有实例)表示为对组件真正实例的引用其实就是ReactDOM.render()返回的组件实例

ReactDOM.render()渲染组件时返回的是组件实例；而渲染dom元素时，返回是具体的dom节点。

一句话总结：
**标识组件内部的元素**

## ref使用

React的ref有3种用法：

### 字符串(官方不推荐使用)

使用ref属性起名字

使用this.refs.xxx使用

````html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="node_modules/react/umd/react.development.js"></script>
    <script src="node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="node_modules/babel-standalone/babel.js"></script>
</head>
<body>
    <div id="demodiv"></div>
    <script type="text/babel">
        class Mycom extends React.Component{
            constructor(props){
                super(props)
                
            }
            fun=()=>{
                // 字符串方式使用this.refs.xxx来获取dom
                this.refs.demop.style.color="red"
            }
            render(){
                return (
                    <div>
                       <h1>字符串方式</h1>
                       {/*使用ref属性给dom起个名字*/}
                       
                       <p ref="demop">使用ref修改我的样式</p>
                       <button onClick={this.fun}>点我修改他</button>
                      
                    </div>
                )
            }
        }
      
        ReactDOM.render(<Mycom/>,document.getElementById("demodiv"))
    </script>
</body>
</html>
````



### 回调函数（官方推荐）

ref={(形参代表的就是当前的dom元素)=>{变量=形参}}



使用的时候直接找到变量即代表当前dom

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="node_modules/react/umd/react.development.js"></script>
    <script src="node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="node_modules/babel-standalone/babel.js"></script>
</head>
<body>
    <div id="demodiv"></div>
    <script type="text/babel">
        class Mycom extends React.Component{
            constructor(props){
                super(props)
                
            }
         

            funb=()=>{
                // 回调函数ref
                this.xiaoming.style.backgroundColor="pink"
            }
            render(){
                return (
                    <div>
      
                       <h2>回调函数方式</h2>
                       {/* <h1 ref={(形参代表的就是当前的dom元素)=>{变量=形参}}>设置我的样式</h1>*/}
                      
                       <h1 ref={(el)=>{this.xiaoming=el}}>设置我的样式</h1>
                       <button onClick={this.funb}>点我修改样式</button>
                      
                    </div>
                )
            }
        }
      


        ReactDOM.render(<Mycom/>,document.getElementById("demodiv"))
    </script>
</body>
</html>
```



### React.createRef() （React16.3新提供）



React 16.3版本后才能使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="node_modules/react/umd/react.development.js"></script>
    <script src="node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="node_modules/babel-standalone/babel.js"></script>
</head>
<body>
    <div id="demodiv"></div>
    <script type="text/babel">
        class Mycom extends React.Component{
            constructor(props){
                super(props)
                // 1.我们需要在conbstructor中创建出ref对象
                // 变量=React.createRef()
                this.cRef=React.createRef()
            }
            fun=()=>{
                // 3.使用
                console.log(this.cRef.current)
                this.cRef.current.style.color="red";
            }
            render(){
                return (
                    <div>
                        <h1>createRef</h1>
                        {/*2。绑定 刚才创建出来的ref*/}
                        <p ref={this.cRef}>修改我</p>
                        <button onClick={this.fun}>点我</button>
                    </div>
                )
            }
        }
    
        ReactDOM.render(<Mycom/>,document.getElementById("demodiv"))
    </script>
</body>
</html>
```

# 事件处理

React事件绑定属性的命名采用小驼峰式写法。

绑定函数的过程中不加() 否则函数会立即执行。

## 事件处理---阻止默认行为

同js原生  React中阻止默认行为使用preventDefault()；



## this指向

方式1：通过bind方法进行原地绑定，从而改变this指向

方式2：通过创建箭头函数

方式3：在constructor中提前对事件进行绑定

方式4：直接在事件中编写箭头函数

方式5：将事件调用的写法改为箭头函数的形式



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="node_modules/react/umd/react.development.js"></script>
    <script src="node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="node_modules/babel-standalone/babel.js"></script>
</head>
<body>
    <div id="demodiv"></div>
    <script type="text/babel">
        class Mycom extends React.Component{
            constructor(props){
                super(props) 
                this.state={
                    text:"我是测试this指向的变量"
                }    
                
                // 提前绑定
                this.fune=this.fune.bind(this)
            }
            // 错误的写法
            fun=function (){
                this.setState({
                    text:"错误的方式"
                })
            }
            // 通过创建箭头函数
            funb=()=>{
                this.setState({
                    text:"通过创建箭头函数"
                })
            }
            // 将事件调用的写法改为箭头函数的形式
            func=function(){
                this.setState({
                    text:"将事件调用的写法改为箭头函数的形式"
                })
            }
            // 通过bind方法进行原地绑定，从而改变this指向
            fund=function(){
                this.setState({
                    text:"通过bind方法进行原地绑定，从而改变this指向"
                })
            }
            // 在constructor中提前对事件进行绑定
            fune=function(){
                this.setState({
                    text:"在constructor中提前对事件进行绑定"
                })
            }
            render(){
                return (
                    <div>
                        <h1>react this指向问题</h1>
                        <h1>{this.state.text}</h1>
                        <button onClick={this.fun}>错误方式</button>
                        <hr/>
                        <button onClick={this.funb}>通过创建箭头函数</button>
                        <hr/>
                        <button onClick={()=>{this.setState({text:"直接在事件中编写箭头函数"})}}>直接在事件中编写箭头函数</button>
                        <hr/>
                        <button onClick={()=>{this.func()}}>将事件调用的写法改为箭头函数的形式</button>
                        <hr/>
                        <button onClick={this.fund.bind(this)}>通过bind方法进行原地绑定，从而改变this指向</button>
                        <hr/>
                        <button onClick={this.fune}>在constructor中提前对事件进行绑定</button>
                    </div>
                )
            }
        }

        ReactDOM.render(<Mycom/>,document.getElementById("demodiv"))
    </script>
</body>
</html>
```

## 函数参数传递

函数参数传递  就是给函数中传递一个实参

### 方式1   把调用函数变成箭头函数方式调用

```js
 <button onClick={()=>{this.fun(1)}}>点我进行函数参数传递</button>
 
  fun=(i)=>{
        console.log(i)
  }
```

### 方式2 bind方式

```js
 <button onClick={this.funb.bind(this,"我是参数","我是参数2")}>点我</button>
 
  funb=(a,b)=>{
        console.log(a+"-----"+b)
    }
```





# React条件渲染

按照指定需求显示指定内容的业务

## if方式

在React中使用if语句条件渲染是最简单的，**但是注意jsx中不允许有if**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="node_modules/react/umd/react.development.js"></script>
    <script src="node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="node_modules/babel-standalone/babel.js"></script>
</head>
<body>
    <div id="demodiv"></div>
    <script type="text/babel">
        class Mycom extends React.Component{
            constructor(props){
                super(props)
    
                this.state={
                    bool:true
                }
                
            }
            render(){
                // jsx中不能由if
                if(this.state.bool){
                    this.text="你好"          
                }else{
                    this.text="你坏"     
                }
                // 也可以由多重if结构

                return (
                    <div>
                        <h1>if条件渲染</h1>
                        {
                            this.text
                        }
                    </div>
                )
            }
        }
      


        ReactDOM.render(<Mycom/>,document.getElementById("demodiv"))
    </script>
</body>
</html>
```

## 三目运算符





# cra create-react-app 

create-react-app 是facebook官方开发

## create-react-app安装

npm install -g create-react-app 安装脚手架

create-react-app --version 查看版本

cmd cd到指令安装路径下


create-react-app 项目名  创建项目

cd 项目名 切换到创建好的项目中

npm start 启动运行

## 拿到空项目

1.删除app.js 与css中的内容

## cra中如何创建组件

1.在src下创建用于容纳组件的文件夹 components

2.新建一个以后缀名.jsx的文件  并且在其中创建组件 (快捷键rcc)

3怎么使用  

​	（1）引用

​	（2）使用



## cra中state的使用

在脚手架中state没有任何区别

```jsx
// 创建组件
import React, { Component } from 'react'

export default class home extends Component {
    constructor(props){
        super(props)
        this.state={
            text:"我是组件中的state数据"
        }
    }
    fun=()=>{
        this.setState({
            text:"我被改了"
        })
    }
    render() {
        return (
            <div>
                你好我是一个组件--{this.state.text}
                <button onClick={this.fun}>点我以我修改</button>
            </div>
        )
    }
}

```

## cre中使用props

和本地模式没有任何区别

```jsx
import React, { Component } from 'react'

export default class propsdemo extends Component {
    render() {
        
        return (
            <div>
                <h1>我是测试props的组件{this.props.title}</h1>
            </div>
        )
    }
}
+
```

### props验证

可以在项目中使用rccp快速生成   但是她所使用的验证还是prop-types库来完成

## this.props.children

如果在组件调用的开标签和关标签之中写入内容是否会渲染呢？

不会

this.props.children就能解决    它表示**组件的所有子节点**

this.props.children的值有三种可能：
1.如果当前组件没有子节点，它就是undefined;
2.如果有一个子节点，数据类型是Object;
3.如果有多个子节点，数据类型就是array。

# 知识点扩展--空标签

在下面这个例子中：

因为我们要循环一段内容      但是多行必须要有父容器包裹     不包裹会出问题   

但是编译之后在页面生成了很多无用代码（会导致性能浪费 ）

```jsx
import React, { Component } from 'react'

export default class kong extends Component {
    render() {
        return (
            <div>
                <h1>空标签</h1>
                {
                    [1,2,3,4,5].map((v,i)=>{
                        return (
                            <div>
                                <h1>循环我1</h1>
                                <h1>循环我2</h1>
                                <h1>循环我3</h1>
                            </div>
                           
                        )
                    })
                }
            </div>
        )
    }
}

```

我们可以使用空标签来进行   这个空标签仅仅是包裹的作用 不参与页面渲染

第一种

<></>空标签(但是不推荐  因为你这样写可能测试弄死你)

```jsx
 [1,2,3,4,5].map((v,i)=>{
                        return (
                            // 不写任何内容空标签
                            <>
                                <h1>循环我1</h1>
                                <h1>循环我2</h1>
                                <h1>循环我3</h1>
                            </>
                           
                        )
                    })
```

方式2

 Fragment不在DOM中增加额外节点或者

```jsx
import React, { Component,Fragment } from 'react'

export default class kong extends Component {
    render() {
        return (
            <div>
                <h1>空标签</h1>
                {
                    [1,2,3,4,5].map((v,i)=>{
                        return (
                            // 不写任何内容空标签
                            // <>
                            //     <h1>循环我1</h1>
                            //     <h1>循环我2</h1>
                            //     <h1>循环我3</h1>
                            // </>
                            <Fragment>
                                <h1>循环我1</h1>
                                <h1>循环我2</h1>
                                <h1>循环我3</h1>
                            </Fragment>
                            
                           
                        )
                    })
                }
            </div>
        )
    }
}

```

# 知识扩展---强制刷新/强制触发render

​     this.forceUpdate()强制触发render渲染

```jsx
import React, { Component } from 'react'

export default class demo extends Component {
    constructor(props){
        super(props)
        this.text="你好"
    }
    fun=()=>{
        this.text="你坏"
        console.log(this.text)
        // 强制触发render渲染
        this.forceUpdate()
    }
    render() {
        return (
            <div>
                <h1>强制刷新---{this.text}</h1>
                <button onClick={this.fun}>点我修改</button>
            </div>
        )
    }
}

```

# 组件传值

## 正向传值

Props

## 逆向传值

任何内容逆向传值都相对来说比较麻烦

语法：

默认不被允许  必须要通过事件来触发

逆向传值没有专门的语法，他是依赖react的正向传值props的。逆向传值只需要让父组件传递一个函数给子组件。子组件通过bind绑定当前的数据 那么父组件的函数就能接受到参数

子组件：

```jsx
import React, { Component } from 'react'

export default class zi extends Component {
    render() {
        return (
            <div>
                zizizizizizziu
                {/* 逆向传值没有专门的语法
                他是依赖react的正向传值props的
                逆向传值只需要让父组件传递一个函数给子组件
                子组件通过bind绑定当前的数据 那么父组件的函数就能接受到参数 */}
                <button onClick={this.props.zifun.bind(this,"我是子组件的数据")}>点我进行逆向传值</button>
            </div>
        )
    }
}

```

父组件:

```jsx
import React, { Component } from 'react'
import Zi from "./zi.jsx"
export default class fu extends Component {
    fufun=(val)=>{
        console.log(val)
    }
    render() {
        return (
            <div>
                fufufuffufufufu
                <Zi zifun={this.fufun}/>
            </div>
        )
    }
}

```

## 同胞传值

使用pubsub-js  来进行同胞兄弟的传值

1.npm install --save pubsub-js

传递数据的组件  数据抛出 PubSub.publish("事件名","数据")

```jsx
import React, { Component } from 'react'
// 1.引用pubsub-js
import PubSub from "pubsub-js"

export default class puba extends Component {
    constructor(props){
        super(props)
        this.state={
            pubatext:"我是a的数据"
        }
    }
    fun=()=>{
        // 2.开始抛出自定义事件（publish自定义事件）
        PubSub.publish("pao",this.state.pubatext)
    }
    render() {
        return (
            <div>
                aaaaaaaaa <button onClick={this.fun}>点我把数据给我兄弟b</button>
            </div>
        )
    }
}

```



接受数据的组件    在第二个组件中接收   PubSub.subscribe("监听的事件",(事件,数据)=>{})

```jsx
import React, { Component } from 'react'
// 1.引用pubsub-js
import PubSub from "pubsub-js"
export default class pubb extends Component {
    // 2.在钩子中监听同胞组件抛出的自定义事件
    componentDidMount() {
        // 回调函数中两个形参分别是   事件,数据
        PubSub.subscribe("pao",(a,b)=>{
            console.log(a)
            console.log(b)
        })
    }
    
    render() {
        return (
            <div>
                bbbbbbbbb
            </div>
        )
    }
}

```



## 跨组件传值

react中自带的

### context上下文对象

context：上下文对象

context很好的解决了跨组件传值的复杂度。可以快速的进行跨组件数据的传递。

想要使用context进行跨组件传值那么就要使用createContext()方法同时方法中给我们提供了两个对象：

Provider对象      生产者---->用来生产数据
Consumer对象   消费者---->用来使用数据

使用：

1.创建文件夹与文件用来容纳上下问对象的基本内容

```js
// 当前这个文件就是用来容纳上下文对象的
import React, { Component } from 'react'

export default class Contextdemo extends Component {
    render() {
        return (
            <div>
                {/* 设置this.props.children */}
                {this.props.children}
            </div>
        )
    }
}

```

2.让这个上下文对象组件 设置成所有组件的爸爸 在index.js中进行设置

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/contextdemo/ye.jsx';
import reportWebVitals from './reportWebVitals';

// 引用上下文对象组件
import Contextdemo from "./context/index.js"

ReactDOM.render(
  // 包裹让所有的组件变成他的子组件
  <Contextdemo>
    <App />
  </Contextdemo>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

```

3.创建上下文对象 并且生产数据与 抛出消费者对象

```js
// 当前这个文件就是用来容纳上下文对象的
// 从react中解构createContext()
import React, { Component,createContext } from 'react'


// 1.把创建上下对象的方法赋值给一个变量方便使用
let context=createContext()
let {Provider,Consumer}=context


class Contextdemo extends Component {
    render() {
        return (
            <div>
             {/* 使用数据的生产者生产传递数据 */}
                <Provider value={123}>
                {/* 设置this.props.children */}
                {this.props.children}
                </Provider>
            </div>
        )
    }
}
// 由于现在不是单纯的暴漏这个组件了 还要消费者方法所以修改暴漏方式
export {Contextdemo,Consumer}
```

4.修改引用

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/contextdemo/ye.jsx';
import reportWebVitals from './reportWebVitals';

// 引用上下文对象组件
// 由于之前的组件暴漏变成了而export  所以修改引用
import {Contextdemo} from "./context/index.js"

ReactDOM.render(
  // 包裹让所有的组件变成他的子组件
  <Contextdemo>
    <App />
  </Contextdemo>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

```

5使用数据

在使用的位置

```jsx
import React, { Component } from 'react'
// 引用上下文对象文件 并且找到消费者
import {Consumer} from "../../context/index.js"
export default class zi extends Component {
    render() {
        return (
            <div>
                zizizi
                {/* 消费者使用数据 */}
                <Consumer>
                    {
                        // val形参就是传递的数据
                        (val)=>{
                            return (
                                <h1>{val}</h1>
                            )
                        }
                    }
                </Consumer>
            </div>
        )
    }
}

```

#### 多个参数

如果需要传递多个值那么就传递一个对象



今后工作会用到的第三方方式 redux



# react样式设置

1.行内样式     style={{}}

2.className  类样式

以上的写法类样式举例    react中没有当前样式进队当前组件生效  所以写样式的时候很容易造成样式污染



## styled-components库来进行样式设置

CSS代码时都有哪些痛点：

**全局污染** - CSS的选择器是全局生效的，所以在class名称比较简单时，容易引起全局选择器冲突，导致样式互相影响。
**命名混乱** - 因为怕全局污染，所以日常起class名称时会尽量加长，这样不容易重复，但当项目由多人维护时，很容易导致命名风格不统一。
**样式重用困难** - 有时虽然知道项目上已有一些相似的样式，但因为怕互相影响，不敢重用。
**代码冗余** - 由于样式重用的困难性等问题，导致代码冗余。

现在随着组件化概念的流行，对从组件层面维护CSS样式的需求日益增大，CSS-in-JS就是在组件内部使用JavaScript对CSS进行了抽象，可以对其声明和加以维护。这样不仅降低了编写CSS样式带来的风险，也让开发变得更加轻松。它和CSS Modules的区别是不再需要CSS样式文件。



使用

1 下载   npm install --save styled-components

2.创建js文件编写样式

```js
import styled from "styled-components"
export let Demostyled=styled.div`
    color:red;
    h1{
        color:pink;
    }

`
```

3使用

```jsx
import React, { Component } from 'react'
// 引用上下文对象文件 并且找到消费者
import {Consumer} from "../../context/index.js"

// import "./zi.css"
import {Demostyled} from "./zistyled.js"
export default class zi extends Component {
    render() {
        return (
            <Demostyled>
            <div>
                zizizi
                <h1>设置我的颜色</h1>

            </div>
            </Demostyled>
        )
    }
}

```

# 高阶组件HOC

在React组件的构建过程中，常常有这样的场景，有一类功能需要被不同的组件公用。可以复用在react组件中的代码与逻辑 就是组件中的一个复用技术



高阶组件-----**-参数是一个组件返回值函数一个组件**
