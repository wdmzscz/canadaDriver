import React  from 'react'; 
import './userInput.scss';



export default class UserInput extends React.Component{

   state={
      searchValue:'',
      selectValue:'name'
   }

   constructor(props){
      super(props);
      this.props=props;
   }

   enableBtn=()=>{
      if(this.textInput.value.length>0){
         this.props.showResult(true)
         this.setState({ searchValue: this.textInput.value});
         this.props.searchItem(this.textInput.value,this.state.selectValue)
      }else{
         this.props.showResult(false)
      }

   }

   selectItemInLis=(event)=>{
      const textValue = this.state.searchValue;
      this.setState({
         selectValue:event.target.value
      })
      this.props.searchItem(textValue,event.target.value)
   }


    render(){
       return(
         <div>
         <div className='row'><h2>User</h2></div>
         <div className='row'>
            <div className='col-sm'></div>
            <div className="input-group">
               <div className='search_label'>search</div>
               <input type="text" className="form-control" onChange={this.enableBtn} onBlur={this.enableBtn} ref={(textInput)=>{this.textInput = textInput}} aria-label="Default" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="input-group">
               <div className="sort_label">sort by</div>
               <select className="custom-select" onChange={this.selectItemInLis}>
                  <option value="name">Name</option>
                  <option value="username">Username</option>
                  <option value="email">Email</option>
               </select>
            </div>
         </div>
         </div>
       )
    }
}