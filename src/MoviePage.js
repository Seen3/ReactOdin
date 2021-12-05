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
var displayLinks = ['http://www.omdbapi.com/?s=avengers&apikey=644805fc', 'http://www.omdbapi.com/?s=fast&apikey=644805fc', 'http://www.omdbapi.com/?s=madagascar&apikey=644805fc', 'http://www.omdbapi.com/?s=hunger&apikey=644805fc', 'http://www.omdbapi.com/?s=mission&apikey=644805fc'];
var movieData = [];
var movieDetails = [];
var tempMovieDetails = [];
var movieAddData = [];
var movieAddData2 = [];
var movieAddData3 = [];
var movieAddData4 = [];

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
                <Link to='../profile'> <b> PROFILE ||</b> </Link>
                <Link to='../'> <b> LOGOUT </b> ||</Link>
            </nav>
        )
    }
}

class Popup extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <p>{this.props.text}</p>
                    <button onClick={this.props.closePopup}>Close Details</button>
                    <br /><br />
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
            appendDetails: [],
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
                                    <p className="paragraphStyle">{movie}</p>
                                </>
                            );
                        }),
                        url: ""
                    });

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
        if (m > 5) {
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

                    console.log(movieAddData);
                    console.log(movieAddData2);
                    console.log(movieAddData3);
                    console.log(movieAddData4);

                    if (movieAddData.length === 0 && movieAddData2.length === 0 && movieAddData3.length === 0 && movieAddData4.length === 0) {
                        alert("Sorry, No such movie found! Try searching for something else!");
                    }

                    else {
                        if (m === 1) {
                            this.setState({
                                appendAddData: movieAddData.Search.map((movie) => {
                                    return (
                                        <>
                                            <img src={movie.Poster} alt={movie.Title} className="imageStyle" onClick={(e) => this.movieDetails(e)} onDoubleClick={this.togglePopup.bind(this)} />
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
                                            <img src={movie.Poster} alt={movie.Title} className="imageStyle" onClick={(e) => this.movieDetails(e)} onDoubleClick={this.togglePopup.bind(this)} />
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
                                            <img src={movie.Poster} alt={movie.Title} className="imageStyle" onClick={(e) => this.movieDetails(e)} onDoubleClick={this.togglePopup.bind(this)} />
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
                                            <img src={movie.Poster} alt={movie.Title} className="imageStyle" onClick={(e) => this.movieDetails(e)} onDoubleClick={this.togglePopup.bind(this)} />
                                        </>
                                    );
                                }),
                            });
                        }

                        movieAddData = [];
                        movieAddData2 = [];
                        movieAddData3 = [];
                        movieAddData4 = [];

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
            fontFamily: "Jazz LET, fantasy",
            fontSize: "100px",
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
                <h1 align="center" style={headingStyle} onClick={this.call_api}>Explore<br /></h1><br /><br /><br /><br />
                <div className="gallery js-flickity" align="center">
                    {this.state.appendData}
                    {this.state.appendAddData}
                    {this.state.appendAddData2}
                    {this.state.appendAddData3}
                    {this.state.appendAddData4}
                </div><br /><br /><br /><br />
                <div style={divStyle} align="center">
                    {this.state.showPopup ?
                        <Popup
                            text={this.state.appendDetails}
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

export class MoviePageWrapper extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return (
            <div>
                <NavbarTop user={this.props.user}/>
                <MoviePage/>
            </div>
        )
    }
}

export default MoviePageWrapper;
