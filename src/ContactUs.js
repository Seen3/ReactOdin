import logo from './logo.svg';
import moviePageBg from './Movie_Critic_Webpage_Background.jpg';
import { Routes, Route, Link } from "react-router-dom";
import './ContactUs.css';
import React from 'react';

export class NavbarTop extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const navStyle = {
            height: '30px',
            fontSize: '20px'
        }

        return (
            <nav align="center" style={navStyle}>
                <Link to='../movie' style={{ color: "white" }}> <b>|| MOVIES ||</b> </Link>
                <Link to='../search' style={{ color: "white" }}> <b> SEARCH ||</b> </Link>
                <Link to='../help' style={{ color: "white" }}> <b> HELP ||</b> </Link>
                <Link to='../profile' style={{ color: "white" }}> <b> PROFILE ||</b> </Link>
                <Link to='../' style={{ color: "white" }}> <b> LOGOUT </b> ||</Link>
                <Link to='../ContactUs' style={{ color: "white" }}> <b> CONTACT US ||</b> </Link>
            </nav>
        )
    }
}


export class ContactUs extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div align="center" style={{borderRadius:"15px"}}>
                <div align="center" style={{ height: "40%", width: "40%", backgroundColor: "hsl(90, 35%, 49%, 0.85)" }}>
                    <div id="contactus" />
                    <h1> Contact Us</h1><br />
                    <form action="action_page.php" />

                    <label for="fname">First Name: </label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                    <br/>
                    <label for="lname">Last Name: </label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                    <br />
                    <br />
                    <label for="country">Country </label>
                    <select id="country" name="country">
                        <option value="India">India</option>
                        <option value="Australia">Australia</option>
                        <option value="Canada">Canada</option>
                        <option value="usa">USA</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="China">China</option>
                    </select>
                    <br />
                    <br />
                    <label for="subject">Subject</label>
                    <br />
                    <textarea id="subject" name="Leave a message" placeholder="Leave a message" style={{ height: "100px", width: "400px" }}></textarea>
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                    <br /><br />

                    <div class="row">
                        <div class="column">
                            <div class="card">
                                <img src="https://cdn3.vectorstock.com/i/thumb-large/66/77/avatar-young-bearded-guy-brow-haired-man-vector-32416677.jpg" alt="Lipi" style={{ height: "15%", width: "50%" }} />
                                <div class="container">
                                    <h2>Md Taseen</h2>
                                    <p class="title">CEO and Co-Founder</p>
                                    <p>He knows his stuff.</p>
                                    <p>mdtaseen@gmail.com</p>
                                    <p><button class="button">Contact</button></p>
                                </div>
                            </div>
                        </div>

                        <div class="column">
                            <div class="card">
                                <img src="https://lh3.googleusercontent.com/proxy/_ShZOCKziw9qZIswR_3n9bThYr8VIxT9DtN7_qroubQOKRxuZIbXMjFMK79all3QMiyZvBPO10AkeN7v84lqE1PhmTcBYfdqXJCRvCwKg3Wz20UJpTEAzSKWiVEFEclq4PPqk33S1RXx" alt="Lipi" style={{ height: "15%", width: "50%" }} />
                                <div class="container">
                                    <h2>Manab Biswas</h2>
                                    <p class="title">Co-Founder</p>
                                    <p>Will definitely help you out</p>
                                    <p>manabk@gmail.com</p>
                                    <p><button class="button">Contact</button></p>
                                </div>
                            </div>
                        </div>

                        <div class="column">
                            <div class="card">
                                <img src="https://cdn.dribbble.com/users/1824846/screenshots/5087861/media/a7439a172c259ee54e6187290692022e.png?compress=1&resize=400x300" alt="Lipi" style={{ height: "15%", width: "50%" }} />
                                <div class="container">
                                    <h2>Lipi Kansal</h2>
                                    <p class="title">Designer</p>
                                    <p>Some text that describes me.</p>
                                    <p>lipikansal@gmail.com</p>
                                    <p><button class="button">Contact</button></p>
                                </div>
                            </div>
                        </div>
                    </div><br />
                    <input type="button" value="Back" />
                    <br></br>
                </div>
            </div>
        );
    }
}

export class ContactUsWrapper extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <NavbarTop user={this.props.user} />
                <ContactUs />
            </div>
        )
    }
}
