import React  from 'react'; 
import UserInput from '../userInput/userInput';
import UserList from '../userList/userList';
import axios from 'axios';
import './search.scss';


export default class Search extends React.Component{

   state ={
      data:[],
      result:[],
      hasResult:false
   }
   componentDidMount(){
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

   searchItem=(value,option)=>{
      debugger;
      let resultArr=[]
      let Items = this.state.data;
      Items.forEach((item)=>{
         if(item[option].toLowerCase().substr(0,value.length) === value){
            resultArr.push(item)
         } 
      })
      this.setState({
         result:resultArr
      })
   }

   showResult=(value)=>{
      this.setState({
         hasResult:value
      })
   }


   render(){
      const {data,result,hasResult} = this.state
      return (
         <div className='content'>
         <UserInput searchItem={this.searchItem} showResult={this.showResult} />
         <UserList Items={hasResult?result:data} />
         </div>   
      )
   }
}