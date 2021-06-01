import React, { Component } from 'react'

export default class home extends Component {
    constructor(props){
        super(props)
        this.state={
            text:"我是组件里state数据"
        }
    }
    fun=()=>{
        this.setState({
            text:"我被修改了"
        })
    }
    render() {
        return (
            <div>
                你好我是一个组件--{this.state.text}
                <button onClick={this.fun}>点我修改</button>
            </div>
        )
    }
}
