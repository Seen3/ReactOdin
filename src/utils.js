import React from 'react';
import './utils.css'
export class LoginBox extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            user:'',
            inpMail:'',
            inpPass:'',
        };
        this.handleChangeMail=this.handleChangeMail.bind(this);
        this.handleChangePass=this.handleChangePass.bind(this);
        this.handleLogin=this.handleLogin.bind(this);
    }
    handleChangeMail(change)
    {
        this.setState(()=>{return {inpMail:change.target.value}});
    }
    handleChangePass(change)
    {
        this.setState(()=>{return {inpPass:change.target.value}});
    }
    handleLogin()
    {
        this.setState((prev)=>{return {user:prev.inpMail}});
        this.props.got(this.state.inpMail);
    }
    render(){
        return (<div id="logbox">
            <h1 id="title">Sign In</h1>
            <input className="txt" type="text" placeholder="E-mail" value={this.state.inpMail} onChange={this.handleChangeMail}></input>
            <input className="txt" type="password" placeholder="Password" value={this.state.inpPass} onChange={this.handleChangePass}></input>
            <button onClick={this.handleLogin} id="login">Login</button>
            <br></br>
            <div id="rem">
            <input type="checkbox" name="remember"/>
            <label name="remember">Remember me</label>
            </div>
            <a href="" id='help'>Need help?</a>
            <div id="inn">
            <p>New here?<a href="" style={{color:'#8BC0FF'}}>SIGN UP NOW</a></p>
            <button type="button" className="logins">Login with Google</button>
            <button type="button" className="logins">Login with Facebook</button>
            </div>
            </div>)
    }
}