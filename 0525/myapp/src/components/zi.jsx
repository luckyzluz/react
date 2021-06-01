import React, { Component } from 'react'

export default class zi extends Component {
    render() {
        return (
            <div>
                zizizi
                <button onClick={this.props.zifun.bind(this,"我是子组件数据")}>点我逆向传值</button>
            </div>
        )
    }
}
