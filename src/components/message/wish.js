import React, {Component} from 'react'


import Firework from '../coolstuff/firework';
import Rikkapoint from '../../img/rikka-mad.gif';
import {Link} from 'react-router-dom';

import videoo from '../../img/toronto.mp4';

import { Player } from 'video-react';

import './wish.css';




class Wish extends Component {

    render() {


      

        let magic = (
            <div className="main2">
            

            <div className="main-container2">   
                <h1 className="title2 animation-right2">Happy Bithday Silly!</h1>
                <h1 className="title2 animation-right3">Have an Awesome Day!</h1>
                <h1 className="title2 animation-right4">Still your Fan <span>😉</span></h1>



                <video id="background-video"  loop autoPlay >
                    <source src={videoo} type="video/mp4" />
                    <source src={videoo} type="video/ogg" />
                    Your browser does not support the video tag.
                </video>

                
    
            </div>
            </div>
        );

        return magic
    }
}

export default Wish;

