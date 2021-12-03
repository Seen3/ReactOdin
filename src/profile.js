import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export function ProfileWrapper()
{   
    let navigate = useNavigate();
    let fun=(u)=>{navigate("/")};
    return (<Profile fun={fun}/>);
}
class Profile extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            user:'',
            pass:'',
            mail:'',
        };
        this.handleChangeUser=this.handleChangeUser.bind(this);
        this.handleChangePass=this.handleChangePass.bind(this);
        this.handleMail=this.handleMail.bind(this);
        this.deletePress=this.deletePress.bind(this);
        
    }
    handleChangeUser(change)
    {
        this.setState(()=>{return{user:change.target.value}});
    }
    handleChangePass(change)
    {
        this.setState(()=>{return {pass:change.target.value}});
    }
    handleMail(change)
    {
        this.setState(()=>{return {mail:change.target.value}});
    }
    deletePress()
    {
        axios.get("http://localhost:5000/record/").then((res)=>{
        let data=res.data;
        let uname=this.state.user;
        let pass=this.state.pass;
        let mail=this.state.mail;
        let exists=false;
        data.forEach(element => {
            console.log("Comparing",element.name,uname);
            if (element.name==uname)
            {
                console.log("Name Match");
                console.log("Comparing",element.pass,pass);
                if(element.pass==pass)
                {
                    console.log("Pass Match");
                    console.log("Comparing",element.mail,mail);
                    if (element.mail==mail)
                    {
                        console.log("Mail Match");
                        exists=true;
                        const id={_id:element._id};
                        axios.post("http://localhost:5000/delete",id).then(
                            this.props.fun()
                        );
                    }
                }
            }
        });
        if (!exists)
        {
            alert("Invalid Data");
            //console.log(data);
        }
        }
        );
    }
    render()
    {
        return(
        <div style={{
            width:'100%',
            textAlign:'center',
            backgroundColor:'hsl(90, 35%, 49%, 0.85)',
            height:'59em',
        }}>
        <input className="txt" type="text" placeholder="Username to confirm" value={this.state.user} onChange={this.handleChangeUser}></input>
        <input className="txt" type="email" placeholder="Email to confirm" value={this.state.mail} onChange={this.handleMail}></input>
        <input className="txt" type="password" placeholder="Password to confirm" value={this.state.pass} onChange={this.handleChangePass}></input>
        <button style={{backgroundColor:'red',
        color:'white',
        width:'80%',
        height:'5em',
        fontSize:'2em',
        fontFamily:'monospace',
        borderRadius:'4em'
        }} onClick={this.deletePress}>Delete Account</button>
        </div>);
    }
}