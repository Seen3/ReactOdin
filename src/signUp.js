import React,{useEffect, useRef} from 'react';
import './utils.css'
export class SignUpBox extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            name:'',
            user:'',
            inpMail:'',
            inpPass:'',
            age:0,
        };
        this.handleAge=this.handleAge.bind(this);
        this.handleName=this.handleName.bind(this);
        this.handleChangeMail=this.handleChangeMail.bind(this);
        this.handleChangePass=this.handleChangePass.bind(this);
        this.handleLogin=this.handleLogin.bind(this);
    }
    handleAge(change)
    {
        this.setState(()=>{return {age:change.target.value}});
    }
    handleName(change)
    {
        this.setState(()=>{return {name:change.target.value}});
    }
    handleChangeMail(change)
    {
        this.setState(()=>{return {inpMail:change.target.value}});
    }
    handleChangePass(change)
    {
        this.setState(()=>{return {inpPass:change.target.value}});
    }
    handleLogin(change)
    {
        this.setState(()=>{return {inpMail:change.target.value}});
    }
    render(){
        return (<div id="logbox">
            <h1 id="title">Make a new Account</h1>
            <input className="txt" type="text" placeholder="Name" value={this.state.name} onChange={this.handleName}></input>
            <input type="number" className="txt" min="0" max="100" placeholder="Age" value={this.state.age} onChange={this.handleAge}></input>
            <input className="txt" type="text" placeholder="E-mail" value={this.state.inpMail} onChange={this.handleChangeMail}></input>
            <input className="txt" type="password" placeholder="Password" value={this.state.inpPass} onChange={this.handleChangePass}></input>
            <button onClick={this.handleLogin} id="login">Sign-Up</button>
            <br></br>
            <a href="" id='help'>Need help?</a>
            <div id="inn">
            
            <button type="button" className="logins">Sign-Up with Google</button>
            <button type="button" className="logins">Sign-Up with Facebook</button>
            </div>
            </div>)
    }
}