import React, { Component } from 'react'

export default class kong extends Component {
    render() {
        return (
            <div>
                <h3>空标签</h3>
                {
                    [1,2,3].map((v,i)=>{
                        return (
                            // <>  //上面需要解构  Fragment
                            // <h3>循环1</h3>
                            // <h3>循环2</h3>
                            // <h3>循环3</h3>
                            // </>
                            <React.Fragment>
                                <h3>循环1</h3>
                            </React.Fragment>
                        )
                    })
                }
            </div>
        )
    }
}
