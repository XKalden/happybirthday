import React, {Component} from 'react';
import MainPage from './components/mainPage/Mainpage'; 
import {Route, Switch} from 'react-router-dom';

import Troll from './components/trollPage/Troll';
import Happy  from './components/happy/happy';
import Hi from './components/message/hi';
import SpecialDay from './components/message/speicalDay';
import Wish from './components/message/wish';

import './App.css';


import song from './img/bk.mp3';

class App extends Component {
  playsond = () => {
    var x = document.getElementById("myAudio"); 
    x.play(); 
  }

  componentDidMount(){
    this.playsond();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/happybirthdayG"  exact component={MainPage}/> 
        <Route path="/happybirthdayG/troll"  exact component={Troll}/> 
        <Route path="/happybirthdayG/wow" component={Happy} />
        <Route path="/happybirthdayG/hi" component={Hi} />
        <Route path="/happybirthdayG/specialDay" component={SpecialDay} />
        <Route path="/happybirthdayG/wish" component={Wish} />
      </Switch>
    );

    return (
      <div className="App">
  
        <audio id="myAudio" autoplay loop >
        <source src={song} type="audio/mpeg" >
        </source>
        </audio>
     
        {routes}
      </div>
    );
  }
}

export default App;
