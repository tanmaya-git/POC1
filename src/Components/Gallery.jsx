import React, {Component} from 'react';
import {Image} from 'react-bootstrap';
import zep from '../zep.png'
export default class Gallery  extends Component{
    render(){
        return(
            
<Image src = {zep} style ={{width:"1200px" ,height:"298px", paddingLeft:"40px"}}/>
        )
    }
}