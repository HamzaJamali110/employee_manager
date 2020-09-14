import React , {Component} from 'react';


class Register extends Component{
  constructor(props){
    super(props);
    this.state={errors:[] , email:"", username:"" , password:"" , sumbitted:false };
  }
  showValidationErr = (elm , msg) => {
    this.setState((prevState) => (
      { 
        errors : [...prevState.errors,{elm:elm,msg:msg}]
      }
      ));
      //console.log(this.state.errors);
  }
  clearValidationErr = (elm)=>{
    let newArr = [];
    this.setState((prevState)=>{
      for (let err of prevState.errors)
      {
        if (elm !== err.elm){
          newArr.push(err);
        }
      }
      return {errors:newArr};
    });
    

  }
  onChangeUsername = (e) =>{
    this.setState({username:e.target.value});
    this.clearValidationErr('username');
  }
  onChangePassword = (e) =>{
    this.setState({password:e.target.value});
    this.clearValidationErr('password');
  }
  onChangeEmail = (e) =>{
    this.setState({email:e.target.value});
    this.clearValidationErr('email');
  }
  submitRegister = () => {
    if(this.state.username === ""){
      this.showValidationErr("username","Username cannot be empty!");
    }
    if(this.state.email === ""){
      this.showValidationErr("email","E-mail cannot be empty!");
    }  
    if(this.state.password === ""){
      this.showValidationErr('password',"Password cannot be empty");
    }
    this.setState((prevState)=>{
      console.log(prevState.errors.length);
      if(!prevState.errors.length){
        return {sumbitted:true};
      
      }
    })
  }



  render(){
    let usernameErr=null;
    let emailErr  = null;
    let passwordErr = null;
    

    for (let err of this.state.errors){
      if(err.elm === "username"){
        usernameErr = err.msg;
      }
      if(err.elm === "email"){
        emailErr = err.msg;
      }
      if(err.elm === "password"){
        passwordErr = err.msg;
      }
    }
    const registerForm = (<div className="inner-container">
    <div className='header'>Register</div>
    <div className="box">
      <div className="input-group">
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" className="login-input" placeholder="Username" onChange={this.onChangeUsername}/>
        <div className="danger-error">{usernameErr?usernameErr:""} </div>
      </div>
      <div className="input-group">
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" className="login-input" placeholder="123@example.com" onChange={this.onChangeEmail}/>
        <div className="danger-error">{emailErr?emailErr:""} </div>
      </div>
      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" className="login-input" placeholder="Password" onChange={this.onChangePassword}/>
        <div className="danger-error">{passwordErr?passwordErr:""} </div>
      </div>
      
      <button type="button" className="login-btn" onClick={this.submitRegister} >Register</button>
    </div>
  </div>)

    const sumbittedpage = (
    <div className="box">
      <h2>You have registered successfully!</h2>
    </div>
    )
    return(
      this.state.sumbitted?sumbittedpage: registerForm
    );
  }




}

export default Register;