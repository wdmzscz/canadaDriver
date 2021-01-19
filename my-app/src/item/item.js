import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//import UserDetails from '../detail/detail';


export default class Item extends Component{

    constructor(props){
        super(props)
        this.props=props;
    }

    render(){
        const {id, name, email,username} = this.props
        const data = JSON.stringify(this.props);
        console.log('this.props',this.props)
        return(
            <div>
            <li className="list-group-item">
                <Link to={{pathname:`/users/${id}`, state:data}}>
                    <div>{name}</div>
                </Link>
                <div>{username}</div>
                <a href={`mailto:${email}`}>{email}</a>
            </li>
            </div>
        ) 
    }
}
