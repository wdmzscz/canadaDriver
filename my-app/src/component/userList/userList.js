import React, {Component} from 'react';
import axios from 'axios';


export default class UserList extends Component{

    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/users')
        .then(function (response) {
          // handle success
          console.log(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    }


    render(){
       return(
            <div className="media">
                <div className="media-left media-middle">
                123
                </div>
                
            </div>
       )
    }
}