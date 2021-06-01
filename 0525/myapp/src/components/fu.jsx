import React, { Component } from 'react'
import Zi from './zi'
export default class fu extends Component {
    fufun=(val)=>{
        console.log(val);
    }
    render() {
        return (
            <div>
                fufufu
                <Zi zifun={this.fufun}/>
            </div>
        )
    }
}
