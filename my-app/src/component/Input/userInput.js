import React, {Component} from 'react';
import {Input } from 'antd';


export default class UserInput extends Component{

     onChange=(e)=>{
        console.log(`checked = ${e.target.checked}`);
      }
    
    render(){
       return(
          <div >
            <div>User</div>
            <div>
                <span>Search</span>
                <Input placeholder="Basic usage" />
               
            </div>

            <div>
                <span>Sort by</span>
                <Input placeholder="Basic usage" />
            </div>
          
        </div>
       )
    }
}