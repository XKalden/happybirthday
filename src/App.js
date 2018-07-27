import React, {Component} from 'react';
import MainPage from './components/mainPage/Mainpage'; 
import {Route, Switch} from 'react-router-dom';


import Rikkapoint from './img/rikka-mad.gif';

import {Link} from 'react-router-dom';

import Troll from './components/trollPage/Troll';
import Happy  from './components/happy/happy';
import Hi from './components/message/hi';
import SpecialDay from './components/message/speicalDay';
import Wish from './components/message/wish';
import Celebrate from './components/message/celebrate';


import './App.css';


import song from './img/bk.mp3';




class App extends Component {

  state = {
    buttonDisplay : false
  }


  playsond = () => {
    let x = document.getElementById("myAudio"); 
    x.volume = .2;
    x.play(); 


    this.setState({
      buttonDisplay: true
    })


  }

  // componentDidMount = () => {
  //  console.log('didmount')

  // }
  // componentWillUnmount = () => {
  //   console.log('un mount')
  // }


  

  render() {

    let homepage = (
      <div class="main-container">   
      <h1 className="title animation-right">Increase Your Volume!</h1>
      <div className="flex">
          <div className="flex1">
          <Link  to="/main" className="btn btn--white animation" onClick={this.playsond}> Start <span>🤔</span></Link>
          </div>
          <div className="flex2">
              <img className="animation-long" src={Rikkapoint} alt="rikka"/>
          </div>
      </div>
  </div>
    );

    if(this.state.buttonDisplay){
      homepage = (<div style={{display:"none"}}> sdf</div>);
    }
    
    let routes = (
      <Switch>
        <Route path="/main" exact component={MainPage}/> 
        <Route path="/troll"  exact component={Troll}/> 
        <Route path="/wow" component={Happy} />
        <Route path="/hi" component={Hi} />
        <Route path="/specialDay" component={SpecialDay} />
        <Route path="/celebrate" component={Celebrate} />
        <Route path="/wish" component={Wish} />
      </Switch>
    );


    return (

      <div className="App main"> 
        <audio id="myAudio" loop >
        <source src={song} type="audio/mpeg" >
        </source>
        </audio>

        {routes}

        {homepage}
      </div>
    );
  }
}

export default App;
