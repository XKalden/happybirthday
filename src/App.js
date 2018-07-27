import React, {Component} from 'react';
import MainPage from './components/mainPage/Mainpage'; 
import {Route, Switch} from 'react-router-dom';

import Troll from './components/trollPage/Troll';
import Happy  from './components/happy/happy';
import Hi from './components/message/hi';
import SpecialDay from './components/message/speicalDay';
import Wish from './components/message/wish';
import Celebrate from './components/message/celebrate';


import './App.css';


import song from './img/bk.mp3';




class App extends Component {

  playsond = () => {
    let x = document.getElementById("myAudio"); 
    // x.play(); 
  }

  // componentDidMount = () => {
  //  console.log('didmount')

  // }
  // componentWillUnmount = () => {
  //   console.log('un mount')
  // }

  messageAlert = () => {
  
  }
  

  render() {
    
    let routes = (
      <Switch>
        <Route path="/" exact component={MainPage}/> 
        <Route path="/troll"  exact component={Troll}/> 
        <Route path="/wow" component={Happy} />
        <Route path="/hi" component={Hi} />
        <Route path="/specialDay" component={SpecialDay} />
        <Route path="/celebrate" component={Celebrate} />
        <Route path="/wish" component={Wish} />

      </Switch>
    );


    
    return (
      <div className="App">

        <audio id="myAudio"  autoPlay="autoplay" loop >
        <source src={song} type="audio/mpeg" >
        </source>
        </audio>

        {this.messageAlert()}

      
  
     
        {routes}

    
      </div>
    );
  }
}

export default App;
