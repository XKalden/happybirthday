import React, {Component} from 'react'

import Rikkapoint from '../../img/rikka-mad.gif';
import {Link} from 'react-router-dom';



class Celebrate extends Component {

    render() {
        let magic = (
            <div className="main">
            <div className="main-container">   
                <h1 className="title animation-right">So celebrate every moment</h1>
                <div className="flex">
                    <div className="flex1">
                    <Link to="/wish" className="btn btn--white animation">Next <span>😜</span></Link>
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

export default Celebrate;

