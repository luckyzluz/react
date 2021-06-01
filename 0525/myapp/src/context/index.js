import React, { Component,createContext } from 'react'

let context=createContext()
let {Provider,Consumer}=context



class index extends Component {
    render() {
        return (
            <div>
                <Provider value={123}>
                {this.props.children}
                </Provider>
            </div>
        )
    }
}
export {Contextdemo,Consumer}
