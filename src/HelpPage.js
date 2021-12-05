import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './HelpPage.css';
import React from 'react';

export class NavbarTop extends React.Component{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        const navStyle = {
            height: '30px',
            fontSize: '20px'
        }

        return (
            <nav align="center" style={navStyle}>
                <Link to='../movie'> <b>|| MOVIES ||</b> </Link>
                <Link to='../search'> <b> SEARCH ||</b> </Link>
                <Link to='../help'> <b> HELP ||</b> </Link>
                <Link to='../profile'> <b> PROFILE ||</b> </Link>
                <Link to='../'> <b> LOGOUT </b> ||</Link>
            </nav>
        )
    }
}


export class HelpPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <>
            <br/>
            <br/>
            <div id="helpboxx">
                <h1 id="title">Need Help?</h1>
                <p> The below given steps will help you understand and navigate out of any problems you might run into.</p>
                <h2> Sign Up</h2>
                <p> In order to sign up to our website just click on Sign up enter your name, email and password and you are all set.
                </p>
                <h2> Login</h2>
                <p>If you are existing user just login by enetering your credentials. Any issues related to logging in or signing up are latency related issues at the database. Please try again within a period of 1 min or try refreshing the page. Make sure you enter your username and password correctly. Your username is your Name which is case sensitive, followed by your password, which too is case sensitive.</p>
                <h2> Page Navigation Issues</h2>
                <p>
                    Any issues related to navivating through the various pages can be solved by reading through the steps mentioned below.<br/><br/>
                    <ul>
                        <li><b>Movies Page:</b> Click on load more to load futher movies onto the same page. Please wait while the different movie elements render on the page. Double Clikcing on any movie leads to a pop up being displayed which shows all the relevant movie details. </li>
                        <li><b>Search Page:</b> Type in a movie name in the search bar and either click on the enter button or click on the search button to display all related movies to the search query entered.</li>
                        <li><b>Profile Page:</b> This page allows you to delete the account based on information entered by the user, which is validated against the database data of the user and then logs the user out.</li>
                        <li><b>Logout: </b> On clicking this button, the user is logged out of the current session and the Login page is rendered back.</li>
                    </ul>
                </p>
                <br/>
            </div>
            <br/>
            </>
        );
    }
}

export class HelpPageWrapper extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <NavbarTop user={this.props.user} />
                <HelpPage />
            </div>
        )
    }
}
