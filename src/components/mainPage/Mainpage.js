import React, {Component} from 'react'
import './Mainpage.css';

import Rikkapoint from '../../img/rikka-mad.gif';

import {Link} from 'react-router-dom';


class MainPage extends Component {
  
    render() {
        let magic = (

            <div className="main">
            <div class="main-container">   
                <h1 className="title animation-right">Hey Silly! Just wanted to Say</h1>
                <div className="flex">
                    <div className="flex1">
                    <Link to="/troll" className="btn btn--white animation" >Click Me <span>🤗</span></Link>
                    </div>
                    <div className="flex2">
                        <img className="animation-long" src={Rikkapoint} alt="rikka"/>
                    </div>
                </div>
            </div>
            </div>
        );

        return magic
    }
}

export default MainPage
