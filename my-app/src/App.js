import React  from 'react'; 
import Search from './search/search';
import Detail from './detail/detail';
import './App.scss';
import {Redirect, Route, Switch} from 'react-router-dom';


export default class App extends React.Component{




   render(){
      return (
         <div className='app'>
         <Switch>
            <Route path='/users' component={Detail}/>
            <Route path='/' component={Search}/>
            <Redirect to=''/>
         </Switch>
       </div>  
      )
   }
}