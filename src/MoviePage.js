import logo from './logo.svg';
import moviePageBg from './Movie_Critic_Webpage_Background.jpg';
import { Routes, Route, Link } from "react-router-dom";
import './MoviePage.css';
import React from 'react';

var des = document.querySelector("#container");
var backgroundColor = "grey";
var i = 0;
var j = 0;
var k = 0;
var m = 0;
var link;
var url;
var imageUrl = "";
var displayLinks = ['http://www.omdbapi.com/?s=avengers&apikey=644805fc', 'http://www.omdbapi.com/?s=fast&apikey=644805fc', 'http://www.omdbapi.com/?s=madagascar&apikey=644805fc', 'http://www.omdbapi.com/?s=hunger&apikey=644805fc', 'http://www.omdbapi.com/?s=mission&apikey=644805fc', 'http://www.omdbapi.com/?s=transformers&apikey=644805fc', 'http://www.omdbapi.com/?s=Harry&apikey=644805fc'];
var movieData = [];
var movieDetails = [];
var tempMovieDetails = [];
var movieAddData = [];
var movieAddData2 = [];
var movieAddData3 = [];
var movieAddData4 = [];
var movieAddData5 = [];
var movieAddData6 = [];

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

export class MoviePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            word: "",
            new: "",
            links: "",
            appendData: [],
            appendAddData: [],
            appendAddData2: [],
            appendAddData3: [],
            appendAddData4: [],
            appendAddData5: [],
            appendAddData6: [],
            appendDetails: [],
            appendPictures: [],
            showPopup: false
        };

        this.call_api = this.call_api.bind(this);
        this.add_api = this.add_api.bind(this);
        this.movieDetails = this.movieDetails.bind(this);
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
        fetch(displayLinks[0])
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                }
                else throw new Error('Network response was not ok.');
            })
            .then((data) => {
                movieData = data;
                console.log(movieData.Search);

                if (movieData.length === 0) {
                    alert("Sorry, No such movie found! Try searching for something else!");
                }

                else {
                    this.setState({
                        appendData: movieData.Search.map((movie) => {
                            return (
                                <>
                                    <img src={movie.Poster} alt={movie.Title} className="imageStyle" onClick={(e) => this.movieDetails(e)} onDoubleClick={this.togglePopup.bind(this)} />
                                </>
                            );
                        }),
                    });

                    movieData = [];

                    console.log(this.state.appendData);
                }
            })
            .catch(function (error) {
                console.log('There has been a problem with your fetch operation: ',
                    error.message);
            });
    }

    add_api() {
        m++;
        if (m > 7) {
            m = 0;
            alert("Sorry, Page Limit Exceeded! Try searching back in a while!");
        }
        else {
            fetch(displayLinks[m])
                .then(function (response) {
                    if (response.ok) {
                        return response.json();
                    }
                    else throw new Error('Network response was not ok.');
                })
                .then((data) => {
                    if (m === 1)
                        movieAddData = data;
                    else if (m === 2)
                        movieAddData2 = data;
                    else if (m === 3)
                        movieAddData3 = data;
                    else if (m === 4)
                        movieAddData4 = data;
                    else if (m === 5)
                        movieAddData5 = data;
                    else if (m === 6)
                        movieAddData6 = data;

                    console.log(movieAddData);
                    console.log(movieAddData2);
                    console.log(movieAddData3);
                    console.log(movieAddData4);
                    console.log(movieAddData5);
                    console.log(movieAddData6);

                    if (movieAddData.length === 0 && movieAddData2.length === 0 && movieAddData3.length === 0 && movieAddData4.length === 0 && movieAddData5.length === 0 && movieAddData6.length === 0) {
                        alert("Sorry, No such movie found! Try searching for something else!");
                    }

                    else {
                        if (m === 1) {
                            this.setState({
                                appendAddData: movieAddData.Search.map((movie) => {
                                    return (
                                        <>
                                            <img src={movie.Poster} alt={movie.Title} className="imageStyle" onMouseOver={(e) => this.movieDetails(e)} onDoubleClick={this.togglePopup.bind(this)} />
                                        </>
                                    );
                                }),
                            });
                        }

                        if (m === 2) {
                            this.setState({
                                appendAddData2: movieAddData2.Search.map((movie) => {
                                    return (
                                        <>
                                            <img src={movie.Poster} alt={movie.Title} className="imageStyle" onMouseOver={(e) => this.movieDetails(e)} onDoubleClick={this.togglePopup.bind(this)} />
                                        </>
                                    );
                                }),
                            });
                        }

                        if (m === 3) {
                            this.setState({
                                appendAddData3: movieAddData3.Search.map((movie) => {
                                    return (
                                        <>
                                            <img src={movie.Poster} alt={movie.Title} className="imageStyle" onMouseOver={(e) => this.movieDetails(e)} onDoubleClick={this.togglePopup.bind(this)} />
                                        </>
                                    );
                                }),
                            });
                        }

                        if (m === 4) {
                            this.setState({
                                appendAddData4: movieAddData4.Search.map((movie) => {
                                    return (
                                        <>
                                            <img src={movie.Poster} alt={movie.Title} className="imageStyle" onMouseOver={(e) => this.movieDetails(e)} onDoubleClick={this.togglePopup.bind(this)} />
                                        </>
                                    );
                                }),
                            });
                        }

                        if (m === 5) {
                            this.setState({
                                appendAddData5: movieAddData5.Search.map((movie) => {
                                    return (
                                        <>
                                            <img src={movie.Poster} alt={movie.Title} className="imageStyle" onMouseOver={(e) => this.movieDetails(e)} onDoubleClick={this.togglePopup.bind(this)} />
                                        </>
                                    );
                                }),
                            });
                        }

                        if (m === 6) {
                            this.setState({
                                appendAddData6: movieAddData6.Search.map((movie) => {
                                    return (
                                        <>
                                            <img src={movie.Poster} alt={movie.Title} className="imageStyle" onMouseOver={(e) => this.movieDetails(e)} onDoubleClick={this.togglePopup.bind(this)} />
                                        </>
                                    );
                                }),
                            });
                        }


                        movieAddData = [];
                        movieAddData2 = [];
                        movieAddData3 = [];
                        movieAddData4 = [];
                        movieAddData5 = [];
                        movieAddData6 = [];

                        console.log(this.state.appendAddData);
                    }
                })
                .catch(function (error) {
                    console.log('There has been a problem with your fetch operation: ',
                        error.message);
                });
        }
    }

    render() {

        const headingStyle = {
            fontFamily: "Apple Chancery",
            fontSize: "100px",
            color: "white"
        };

        const divStyle = {
            backgroundColor: "hsl(90, 35%, 49%, 0.85)",
            height: "100%",
            width: "90%",
            marginLeft: "5%",
            borderRadius: "25px"
        }

        const imageStyle = {
            height: "400px",
            width: "400px",
            borderRadius: "15px",
            margin: "20px"
        }

        const buttonStyle = {
            borderRadius: "25px",
            height: "50px",
            width: "150px",
            fontFamily: "Jazz LET, fantasy",
            fontSize: "25px",
        }

        return (
            <div style={divStyle} id="Movie_Details">
                <h1 align="center" style={headingStyle} onMouseOver={this.call_api}>MOVIES<br /></h1>
                <div className="gallery js-flickity" align="center">
                    {this.state.appendData}
                    {this.state.appendAddData}
                    {this.state.appendAddData2}
                    {this.state.appendAddData3}
                    {this.state.appendAddData4}
                    {this.state.appendAddData5}
                    {this.state.appendAddData6}
                </div><br /><br /><br /><br />
                <div style={divStyle}>
                    {this.state.showPopup ?
                        <Popup
                            text={this.state.appendDetails}
                            image={this.state.appendPictures}
                            closePopup={this.togglePopup.bind(this)}
                        />
                        : null
                    }
                </div><br /><br />
                <div align="center">
                    <button onClick={this.add_api} style={buttonStyle}>Load More</button>
                </div>
                <br /><br />
            </div>
        )
    }
}

export class MoviePageWrapper extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <NavbarTop user={this.props.user} />
                <MoviePage />
            </div>
        )
    }
}

export default MoviePageWrapper;
