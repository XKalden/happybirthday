import React, {Component} from 'react'

import Rikkapoint from '../../img/rikka-mad.gif';
import {Link} from 'react-router-dom';

import videoo from '../../img/toronto.mp4';

import { Player } from 'video-react';




class Wish extends Component {

    render() {

      

        let magic = (
            <div className="main">
            <div className="main-container">   
                <h1 className="title animation-right">Happy Bithday!!</h1>
                
                <Player
                playsInline
                src={videoo}
                ></Player>
          

                
    
            </div>
            </div>
        );

        return magic
    }
}

export default Wish;

