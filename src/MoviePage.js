import React from 'react'
import './MoviePage.css'
import {NavbarTop} from './searchPage'
class MovieBox extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return (
            <div id="boxx">
                <h1>MOVIE NAME</h1>
                <img src="" alt="placeholder"/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere iste doloremque inventore, aliquam dolor consectetur sit quasi velit repellat quod. Aut omnis quibusdam distinctio quae provident deserunt placeat tempora ad?
                </p>
                <div className="rat" id="red"></div>
                <div className="rat" id="green"></div>
                <div id="black"></div>
            </div>
        )
    }
}
export class MoviePage extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <div>
                <NavbarTop user={this.props.user}/>
                <MovieBox/>
            </div>
        )
    }
}