import React from 'react'
import { NavbarTop } from './searchPage'

var Totalcost = 0;
var des = document.querySelector("#container");
var backgroundColor = "grey";
var i = 0;
var link;

export class MoviePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showName: "NULL",
            showLanguage: "NULL",
            showScore: "0",
            showGenres: "NULL",
            showStatus: "NULL",
            showImage: "NULL",
            showSummary: "NULL",
            word: "",
            new: "",
            links: ""
        }
        this.increment = this.increment.bind(this);
        this.call_api = this.call_api.bind(this);
    }

    handleChange(value) {
        this.setState({
            new: value
        });
    }

    increment() {
        this.setState({
            word: this.state.new,
            links: "https://api.tvmaze.com/search/shows?q=" + this.state.new,
            new: ''
        });

        console.log('https://api.tvmaze.com/search/shows?q=' + this.state.new);
        link = 'https://api.tvmaze.com/search/shows?q=' + this.state.new;

        this.call_api();
    }

    call_api() {
        fetch('https://api.tvmaze.com/search/shows?q=' + this.state.new)
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                }
                else throw new Error('Network response was not ok.');
            })
            .then((data) => {
                this.setState({
                    showName: data[0].show.name,
                    showLanguage: data[0].show.language,
                    showScore: (data[0].score) * 100 + "%",
                    showGenres: data[0].show.genres + " ",
                    showStatus: data[0].show.status,
                    showImage: data[0].show.image.original,
                    showSummary: data[0].show.summary
                });
            })
            .catch(function (error) {
                console.log('There has been a problem with your fetch operation: ',
                    error.message);
            });
    }

    render() {

        const headingStyle = {
            fontFamily: "Jazz LET, fantasy",
            fontSize: "80px",
            backgroundColor: "lightgreen",
            borderRadius: "15px"
        };

        const navigationStyle = {
            fontFamily: "Jazz LET, fantasy",
            fontSize: "20px",
            backgroundColor: "lightgreen"
        };

        const paragraphStyle = {
            fontFamily: "Apple Chancery, cursive",
            fontSize: "20px",
            backgroundColor: "lightgreen"
        };

        const divStyle = {
            backgroundColor: "lightgreen",
            height: "100%",
            width: "90%",
            marginLeft: "5%",
            borderRadius: "15px"
        }

        const searchStyle = {
            width: "400px",
            height: "40px",
            borderRadius: "15px"
        }

        const buttonStyle = {
            width: "80px",
            height: "20px",
            borderRadius: "8px"
        }

        const imageStyle = {
            height: "400px",
            width: "400px",
            borderRadius: "15px",
            margin: "20px"
        }

        return (
            <div style={divStyle} id="Movie_Details">
                <h1 align="center" style={headingStyle}>Explore<br/>
                </h1>
                <div align="center">
                    <input type="text" align="center" style={searchStyle} value={this.state.new} onChange={(e) => this.handleChange(e.target.value)} /><br /><br />
                    <input type="submit" value="Search" style={buttonStyle} onClick={() => this.increment()} /><br /><br /><br /><br />
                </div>
                <section>
                    <article>
                        <div align="center">
                            <p style={paragraphStyle}>
                                <img src={this.state.showImage} alt="Movie_Image" style={imageStyle} /><br />
                                <b>Show Name: </b><b><i>{this.state.showName}</i></b><br />
                                <b> Language: </b><i>{this.state.showLanguage}</i><br />
                                <b> Sucess: </b><i>{this.state.showScore}</i><br />
                                <b> Genre: </b><i>{this.state.showGenres}</i><br />
                                <b> Status: </b><i>{this.state.showStatus}</i><br />
                                <b> Summary: </b><i>{this.state.showSummary}</i>
                                <br /><br /><br />
                            </p>
                        </div>
                    </article>
                </section>
            </div>
        )
    }
}
