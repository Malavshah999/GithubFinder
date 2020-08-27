import React, { Component } from 'react'
import spinner from './spinner.gif'

class Spinner extends Component {
    render() {
        return (
     
                <img src ={spinner} alt="Loading..." style={{ width:150 , display:"flex"}} ></img> 
            
        )
    }
}

export default Spinner
