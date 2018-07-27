import React, {Component} from 'react'

import Rikkapoint from '../../img/rikka-mad.gif';
import {Link} from 'react-router-dom';



class Laugh extends Component {

    render() {
        let magic = (
            <div className="main">
            <div className="main-container">   
                <h1 className="title animation-right">Laugh Every Moment!</h1>
                <div className="flex">
                    <div className="flex1">
                    <Link to="/smile" className="btn btn--white animation">Next <span>😆</span></Link>
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

export default Laugh;

