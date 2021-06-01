import React, { Component } from 'react'

export default class demo extends Component {
    constructor(props){
        super(props)
        this.text="你好"
    }
    fun=()=>{
        this.text="你坏"
        console.log(this.text);
        this.forceUpdate()
    }
    render() {
        return (
            <div>
                <h3>强制刷新-{this.text}</h3>
                <button onClick={this.fun}>点我修改</button>
            </div>
        )
    }
}
