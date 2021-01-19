import React, {Component} from 'react';
import './userList.scss';
import Item from '../item/item';

export default class UserList extends Component{

   constructor(props){
      super(props)
      this.props=props;
   }


    render(){
       const data = this.props.Items;
       if(data.length===0){
         return(
            <div>
               <ul className="list-group">
                  <li className="list-group-item disabled">cant find result</li>
               </ul>
            </div>
         )
       }else{
         return(
            <div >
               <ul className="list-group">
                  {data.map((item)=>{
                     return (
                        <Item key={item.id} {...item} userInfo={Item}/>
                     )
                  })}
               </ul>  
               
            </div>
         )
      }
   }
}