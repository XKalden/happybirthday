import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import './Troll.css';

import Rikkadance from '../../img/rikka-dance.gif';


class Troll extends Component {
    
    render() {

        let magic = (
            <div className="main">
            <div class="main-container">   
            <h1 className="title animation-later">You shouldn't go pressing a random button on the internet without knowing what it does. Silly!</h1>
            <div className="flex">
                <div className="flex1">  
                <Link to="/hi" className="btn btn--white animation" >Don't worry it's a Safe Button<span>😊</span></Link>
                </div>
                <div className="flex2">
                    <img className="animation-long" src={Rikkadance} alt="rikka"/>
                </div>
            </div>
            </div>
        </div>
        )

        return magic
    }
}

export default Troll;
