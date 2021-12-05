import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './searchPage.css';

export class NavbarTop extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        const navStyle = {
            height: '60px',
            fontSize: '20px'
        }

        return (
            <nav align="center" style={navStyle}>
                <br />
                <Link to='../movie' style={{ color: "white" }}> <b>|| MOVIES ||</b> </Link>
                <Link to='../search' style={{ color: "white" }}> <b> SEARCH ||</b> </Link>
                <Link to='../help' style={{ color: "white" }}> <b> HELP ||</b> </Link>
                <Link to='../profile' style={{ color: "white" }}> <b> PROFILE ||</b> </Link>
                <Link to='../' style={{ color: "white" }}> <b> LOGOUT </b> ||</Link>
            </nav>
        )
    }
}

class Popup extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <div style={{ float: "left" }}>
                        <img src={this.props.image} style={{ margin: "15px", borderRadius: "15px", height: "600px" }} />
                    </div>
                    <p className='popup_text'>{this.props.text}</p>
                    <div align="center">
                        <button onClick={this.props.closePopup}>Close Details</button>
                    </div>
                    <br /><br />
                    <div style={{ clear: "both" }} />
                </div>
            </div>
        );
    }
}

var Totalcost = 0;
var des = document.querySelector("#container");
var backgroundColor = "grey";
var i = 0;
var j = 0;
var k = 0;
var m = 0;
var url = "";
var link;
var imageUrl = "";
var movieData = [];
var movieData = [];
var movieDetails = [];
var tempMovieDetails = [];

class SearchPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            word: "",
            new: "",
            links: "",
            appendData: [],
            appendDetails: [],
            appendPictures: [],
            showPopup: false,
        }
        this.increment = this.increment.bind(this);
        this.call_api = this.call_api.bind(this);
    }

    handleChange(value) {
        this.setState({
            new: value
        });
    }

    increment(event) {
        if (event.charCode === 13) {
            this.setState({
                word: this.state.new,
                links: "http://www.omdbapi.com/?s=" + this.state.new + "&apikey=644805fc",
                new: ''
            });

            console.log('http://www.omdbapi.com/?s=' + this.state.new + "&apikey=644805fc");
            link = 'http://www.omdbapi.com/?s=' + this.state.new + "&apikey=644805fc";

            this.call_api();
        }
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    movieDetails(movie) {
        imageUrl = movie.target.src;
        console.log(movie.target.alt);
        url = "http://www.omdbapi.com/?t=" + movie.target.alt + "&apikey=644805fc";
        fetch(url)
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                }
                else throw new Error('Network response was not ok.');
            })
            .then((data) => {
                for (j in data) {
                    movieDetails.push(data[j]);
                }
                console.log(movieDetails);

                for (k = 0; k < 10; k++) {
                    tempMovieDetails.push(movieDetails[k]);
                }

                console.log(tempMovieDetails);

                if (movieDetails.length === 0) {
                    alert("Sorry, No such movie found! Try searching for something else!");
                }

                else {
                    this.setState({
                        appendDetails: tempMovieDetails.map((movie) => {
                            return (
                                <>
                                    <p className="popup_text">{movie}</p>
                                </>
                            );
                        }),
                        appendPictures: imageUrl,
                        url: ""
                    });

                    imageUrl = "";
                    movieDetails = [];
                    tempMovieDetails = [];
                }
            })
            .catch(function (error) {
                console.log('There has been a problem with your fetch operation: ',
                    error.message);
            });
    }

    call_api() {
        fetch('http://www.omdbapi.com/?s=' + this.state.new + "&apikey=644805fc")
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                }
                else throw new Error('Network response was not ok.');
            })
            .then((data) => {
                movieData = data;

                if (movieData.length === 0) {
                    alert("Sorry, No such movie found! Try searching for something else!");
                }

                else {
                    this.setState({
                        appendData: movieData.Search.map((movie) => {
                            return (
                                <div style={{ margin: "20px" }}>
                                    <br />
                                    <div style={{ float: "left", margin: "15px" }}>
                                        <img src={movie.Poster} alt={movie.Title} className="imageStyle" onMouseOver={(e) => this.movieDetails(e)} onClick={this.togglePopup.bind(this)} />
                                    </div>
                                    <br /><br /><br /><br /><br /><br /><br /><br />
                                    <p className="paragraphStyle"> <b> Name:</b> {movie.Title} </p>
                                    <p className="paragraphStyle"> <b> Year:</b> {movie.Year} </p>
                                    <p className="paragraphStyle"> <b> Type: </b>{movie.Type} </p>
                                    <div style={{ clear: "both" }} />
                                    <hr style={{ border: "2px solid white" }} />
                                </div>
                            );
                        })
                    });
                    console.log(this.state.appendData);
                }

            })
            .catch(function (error) {
                console.log('There has been a problem with your fetch operation: ',
                    error.message);
            });
    }

    render() {

        const headingStyle = {
            fontFamily: "Apple Chancery",
            fontSize: "100px",
            color: "white"
        };

        const paragraphStyle = {
            fontFamily: "Apple Chancery, cursive",
            fontSize: "20px",
        };

        const divStyle = {
            backgroundColor: "hsl(90, 35%, 49%, 0.85)",
            height: "100%",
            width: "70%",
            marginLeft: "15%",
            borderRadius: "25px"
        }

        const searchStyle = {
            width: "400px",
            height: "40px",
            borderRadius: "15px"
        }

        const imageStyle = {
            height: "400px",
            width: "400px",
            borderRadius: "15px",
            margin: "20px"
        }

        return (
            <div style={divStyle} id="Movie_Details">
                <h1 align="center" style={headingStyle}>Explore</h1>
                <div align="center">
                    <input type="text" align="center" style={searchStyle} placeholder="Search for a movie...." value={this.state.new} onChange={(e) => this.handleChange(e.target.value)} onKeyPress={this.increment} /><br /><br />
                </div>
                <br /><br /><br /><br />
                <div>
                    {this.state.appendData}
                </div>
                <div>
                    {this.state.showPopup ?
                        <Popup
                            text={this.state.appendDetails}
                            image={this.state.appendPictures}
                            closePopup={this.togglePopup.bind(this)}
                        />
                        : null
                    }
                </div><br /><br /><br /><br />
            </div>
        )
    }
}

class FooterPart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <footer>
                <h1>ODIN MOVIES</h1>
            </footer>
        )
    }
}
export class SearchPageWrapper extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <NavbarTop user={this.props.user} />
                <SearchPage />
            </div>
        )
    }
}