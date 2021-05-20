# 与三阶段无关

扩展运算符



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

