import React, { Component } from 'react'
import Pubsub from 'pubsub-js'
export default class pubb extends Component {
    componentDidMount(){
        Pubsub.subscribe("pao",(a,b)=>{
            console.log(a);
            console.log(b);
        })
    }
    render() {
        return (
            <div>
                bbb
            </div>
        )
    }
}
