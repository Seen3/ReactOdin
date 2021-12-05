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
class MovieBoc extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{ backgroundColor: 'hsl(90, 35%, 49%, 0.85)', margin: '0 auto', width: '50%', borderRadius: '2em' }}>
                <img src={this.props.movie.Poster} />
                <h1>{this.props.movie.Title}</h1>
                <h2>{this.props.movie.Year}</h2>
                <h3>{this.props.movie.Type}</h3>
            </div>
        )
    }
}
class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "",
            movies: [],
        };
        this.changeData = this.changeData.bind(this);
        this.search = this.search.bind(this);
        this.searchKey = this.searchKey.bind(this);
    }
    searchKey(e) {
        if (e.key === 'Enter') {
            this.search();
        }
    }

    changeData(change) {
        this.setState(() => { return { data: change.target.value } });
    }
    search() {
        const movie = this.state.data;
        let options = {
            method: 'GET',
            url: 'http://www.omdbapi.com/?i=tt3896198&apikey=644805fc',
            params: { s: movie, },
            headers: {

            }
        };
        axios.request(options).then((response) => {
            let data = response.data.Search;
            console.log(data);
            this.setState(() => { return { movies: data } });
        }).catch(function (error) {
            console.error(error);
        });
    }
    render() {
        let xxxxx = this.state.movies;
        let xxx;
        xxx = xxxxx.map((ele) => {
            return <li key={ele.mdbID}><MovieBoc movie={ele} /></li>
        })
        console.log(xxx);
        return (
            <div id="inpdiv">
                <input type='text' placeholder='SEARCH HERE...' value={this.state.data} style={{ height: '3em' }} onChange={this.changeData} onKeyPress={(e) => this.searchKey(e)} />
                <br /><br />
                <button style={{ borderRadius: '2em', width: '8em', height: '3em' }} onClick={this.search}>Search</button>
                <br />
                <div>
                    <ul>
                        {xxx}
                    </ul>
                </div>
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
export class SearchPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <NavbarTop user={this.props.user} />
                <SearchBox />
                <FooterPart />
            </div>
        )
    }
}