import React from 'react';
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
                <li><a href=''>HOME</a></li>
                <li><a href=''>PROFILE</a></li>
                <li><a href=''>SETTINGS</a></li>
                <li>{this.props.user}</li>
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