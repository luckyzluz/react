import React, { Component } from 'react'
import {Consumer} from '../../context/index'
export default class zi extends Component {
    render() {
        return (
            <div>
                <Consumer>
                    {
                        (val)=>{ 
                            return(
                                <h1>{val}</h1>
                            )
                        }
                    }
                </Consumer>
                
            </div>
        )
    }
}
