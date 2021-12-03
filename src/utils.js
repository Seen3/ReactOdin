import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './utils.css'
import axios from 'axios';
export function LoginWrapper()
{   
    let navigate = useNavigate();
    let fun=()=>{navigate("/search")};
    return (<LoginBox fun={fun}/>);
}

class LoginBox extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            user:'',
            inpPass:'',
        };
        this.handleChangeUser=this.handleChangeUser.bind(this);
        this.handleChangePass=this.handleChangePass.bind(this);
        this.handleLogin=this.handleLogin.bind(this);
    }
    handleChangeUser(change)
    {
        this.setState(()=>{return{user:change.target.value}});
    }
    handleChangePass(change)
    {
        this.setState(()=>{return {inpPass:change.target.value}});
    }
    handleLogin()
    {
        axios.get("http://localhost:5000/record/").then((res)=>{
        let data=res.data;
        let uname=this.state.user;
        let pass=this.state.inpPass;
        let exists=false;
        data.forEach(element => {
            if (element.name==uname)
            {
                if(element.pass==pass)
                {
                    exists=true;
                }
            }
        });
        if (!exists)
        {
            alert("The user does not exist");
        }
        else{
            this.props.fun();
        }
        }
        );
    }
    render(){
        return (<div id="logbox">
            <h1 id="title">Sign In</h1>
            <input className="txt" type="text" placeholder="Username" value={this.state.user} onChange={this.handleChangeUser}></input>
            <input className="txt" type="password" placeholder="Password" value={this.state.inpPass} onChange={this.handleChangePass}></input>
            <button onClick={this.handleLogin} id="login">Login</button>
            <br></br>
            <div id="rem">
            <input type="checkbox" name="remember"/>
            <label name="remember">Remember me</label>
            </div>
            <a href="" id='help'>Need help?</a>
            <div id="inn">
            <br/>
            <p style={{textAlign:'center'}}>New here?<Link to="signup" style={{color:'#8BC0FF'}}>SIGN UP NOW</Link></p>
            <button type="button" className="logins">Login with Google</button>
            <button type="button" className="logins">Login with Facebook</button>
            </div>
            </div>)
    }
}