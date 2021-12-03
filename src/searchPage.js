import React from 'react';
import { Link } from 'react-router-dom';
import './searchPage.css';
export class NavbarTop extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <nav>
                <ul>
                <li><Link to='../'>LOGOUT</Link></li>
                <li><Link to='../profile'>PROFILE</Link></li>
                </ul>
            </nav>
        )
    }
}
class SearchBox extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <div id="inpdiv">
                <input type='text' placeholder='SEARCH HERE...'/>
            </div>
        )
    }
}
class FooterPart extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <footer>
            <h1>ODIN MOVIES</h1>
            </footer>
        )
    }
}
export class SearchPage extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return (
            <div>
                <NavbarTop user={this.props.user}/>
                <SearchBox />
                <FooterPart />
            </div>
        )
    }
}