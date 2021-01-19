import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './detail.scss';

export default class UserDetails extends Component{

   constructor(props){
      super(props);
      this.props=props;
   }

   componentDidMount(){
      //let that=this;
      let that=this;
      axios.get('http://jsonplaceholder.typicode.com/users')
      .then(function (response) {
         // handle success
         that.setState({
            data:response.data
         })
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
       const {name,username,email,phone,website} = JSON.parse(this.props.location.state);
       const {address,company} = JSON.parse(this.props.location.state)
       return(
          <div className='detail'>
          <h1>Users &gt; {name}</h1>
          <div  className='card-group'>
          <div className='card-body'>
          <h5 className='card-title'>Contact Info</h5>
          <div className='card-text'>
             <p>Username:{username}</p>
             <p>Email:{email}</p>
             <p>Phone:{phone}</p>
             <p>Website:<Link to={website} target='_blank'  rel="noreferrer">{website}</Link></p>
          </div>
          </div>


         <div className='card-body'>
            <h5 className='card-title'>Address</h5>
            <p>{address.suite} {address.street} {address.city} {address.zipcode}</p>
         </div>

         <div className='card-body'>
         <h5 className='card-title'>Company</h5>
         <p>{company.name}</p>
         <p>{company.bs}</p>
         <p>{company.catchPhrase}</p>
         </div>

          </div>
          </div>
       )
    }
}