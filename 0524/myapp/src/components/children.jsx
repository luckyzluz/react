import React, { Component } from 'react'

export default class children extends Component {
    fun=(i)=>{
        console.log(i);
    }
    funb=(a,b)=>{
        console.log(a+"---"+b);
    }
    render() {
        return (
            <div>
                <h3>this.props.children</h3>
                <button onClick={()=>{this.fun(1)}}>点我进行函数参数传递</button>
                <button onClick={this.funb.bind(this,"我是参数1","我是参数2")}>点我进行函数参数传递bind</button>
                <ul>
                {this.props.children.map((v,i)=>{
                    return(
                        <li key={i}>{v}</li>
                    )
                })}
                </ul>
                
            </div>
        )
    }
}
