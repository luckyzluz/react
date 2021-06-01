import React, { Component } from 'react'
import Pubsub from 'pubsub-js'
export default class puba extends Component {
    constructor(props){
        super(props)
        this.state={
            pubatext:"我是a的数据"
        }
    }
    fun=()=>{
        Pubsub.publish("pao",this.state.pubatext)
    }
    render() {
        return (
            <div>
                aaa <button onClick={this.fun}>点我传输数据给b</button>
            </div>
        )
    }
}
