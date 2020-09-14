import React , {Component} from 'react';
import Redirect from 'react-dom';
//import ReactDOM from 'react-dom';


class Login extends Component{
  constructor(){
    super();
    this.state={ loggedin:false};
  }
  submitLogin = (e) => {
    this.setState({loggedin:true});
  }

  render(){
    if(this.state.loggedin){
      return <Redirect to="./Admin"></Redirect>
    }
    return(
      <div className="inner-container">
        <div className="header">
          Login
        </div>
        
        <div className="box">
          <div className="input-group">
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" className="login-input" placeholder="Username"/>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" className="login-input" placeholder="Password"/>
          </div>
          <button type="button" className="login-btn" onClick={this.submitLogin} >Login</button>
          <button className="g-signin2" />
        </div>
      </div>
    );
  }




}

export default Login;