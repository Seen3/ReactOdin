import React from 'react';
import './App.css';
import { SearchPage } from './searchPage';
import { MoviePage } from './MoviePage';
import { LoginBox } from './utils';
import { SignUpBox } from './signUp';

class App extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
      user:'',
      loggedIn:false,
    }
    this.gotUser=this.gotUser.bind(this);
  }
  gotUser(data)
  {
    this.setState({
      user:data,
      loggedIn:true,
    })
  }
  render()
  {
    if(this.state.loggedIn===false)
    {
    return(
      <div className="App">
        <h1 id="tit">ODIN MOVIES</h1>   
        <LoginBox got={this.gotUser}/>
      </div>
    );
  }
  else{
    return(
      <div>
        <SearchPage user={this.state.user}/>
      </div>
    )
  }

  }
}
export default App;
