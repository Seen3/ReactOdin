import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './utils.css'
import axios from 'axios';
export function LoginWrapper() {
    let navigate = useNavigate();
    let fun = (u) => { navigate("/search", { state: { user: u } }) };
    return (<LoginBox fun={fun} />);
}

class LoginBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            inpPass: '',
        };
        this.handleChangeUser = this.handleChangeUser.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleChangeUser(change) {
        this.setState(() => { return { user: change.target.value } });
    }
    handleChangePass(change) {
        this.setState(() => { return { inpPass: change.target.value } });
    }
    handleLogin() {
        axios.get("http://localhost:5000/record/").then((res) => {
            let data = res.data;
            let uname = this.state.user;
            let pass = this.state.inpPass;
            let exists = false;
            data.forEach(element => {
                if (element.name === uname) {
                    if (element.pass === pass) {
                        exists = true;
                    }
                }
            });
            if (!exists) {
                alert("The user does not exist");
            }
            else {
                console.log(uname);
                this.props.fun(uname);
            }
        }
        );
    }
    render() {
        return (
            <>
                <br /><br />
                <div id="logbox">
                    <h1 id="title">Sign In</h1>
                    <input className="txt" type="text" placeholder="Username" value={this.state.user} onChange={this.handleChangeUser}></input>
                    <input className="txt" type="password" placeholder="Password" value={this.state.inpPass} onChange={this.handleChangePass}></input>
                    <button onClick={this.handleLogin} id="login">Login</button><br />
                    <br></br>Remember Me<br/>
                    <div align="center" id="rem">
                        <input type="checkbox" name="remember" />
                        <label name="remember">___________________________</label><br />
                    </div>
                    <div id="inn">
                        <br /><br />
                        <p style={{ textAlign: 'center' }}>New here? <Link to="signup" style={{ color: "lightgreen" }}>SIGN UP NOW</Link><br />
                            <Link to="help" style={{ color: "lightgreen" }}>Need help?</Link><br />
                        </p>
                    </div>
                </div>
            </>
        )
    }
}