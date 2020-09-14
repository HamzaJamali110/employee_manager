import React , {Component,Fragment} from 'react';
//import ReactDOM from 'react-dom';
import Login from './Login';
import Register from './Register';
import './App.scss'
import InputTodo from './Components/InputTodo'
import ViewAllTodo from './Components/Viewalltodo'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {isOpenRegister:true , isOpenLogin:false };
  }
  showLogin = () => {
    this.setState({isOpenLogin:true ,isOpenRegister:false})
  }
  showRegister = () => {
    this.setState({isOpenLogin:false ,isOpenRegister:true})
  }
  render(){
    return(
      <Fragment>
      <InputTodo/>
      <ViewAllTodo/>
      </Fragment>
  //       <div className="root-container">
  //         <div className="box-controller">
  //           <div className={"controller" + (this.state.isOpenLogin?" selected-controller" :"")} onClick={this.showLogin}>
  //             Login
  //           </div>
  //           <div className={"controller" + (this.state.isOpenRegister?" selected-controller" :"")} onClick={this.showRegister}>
  //             Register
  //           </div>
  //         </div>
  //         <div className="box-container">
  //           {this.state.isOpenRegister?<Register/>:<Login/>}
  //         </div>
  //       </div>      
    )
 }
}


export default App;