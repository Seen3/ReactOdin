import axios from 'axios';
import React,{useEffect, useRef} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './utils.css'


class SignUp extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            name:'',
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
        change.preventDefault();
        const newuser={
            name:this.state.name,
            mail:this.state.inpMail,
            pass:this.state.inpPass,
            age:this.state.age,
        };
        console.log("Logging in");
        axios.post("http://localhost:5000/record/add",newuser)
        .then((res)=>console.log(res.data));
        this.setState({
            name:'',
            inpMail:'',
            inpPass:'',
            age:0,
        });
        this.props.fun();
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
            <p>Already have an account?<Link to="/" style={{color:'#8BC0FF'}}>Login</Link></p>
            <a href="" id='help'>Need help?</a>
            <div id="inn">
            
            <button type="button" className="logins">Sign-Up with Google</button>
            <button type="button" className="logins">Sign-Up with Facebook</button>
            <div className="triangle"></div>
            <div className="tri"></div>
            </div>
            </div>)
    }
}
export function SignUpBox(){
    let navigate = useNavigate();
    let fun=()=>{navigate("/")};
    return(
        <SignUp fun={fun}/>
    )
}
