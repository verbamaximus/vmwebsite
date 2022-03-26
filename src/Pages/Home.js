import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import sherlock from '../Images/sherlocked.jpeg';
import { Fade } from 'react-reveal';
import "animate.css/animate.css";

const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`04/04/${year}`) - +new Date(); //MM/DD/YYYY
  
    let timeLeft = null;
  
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
  
    return timeLeft;
  }

function Home() {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
    });

    return (
      <div>
        <div className="home-header">
              <div className="pa3 pa4-ns">
                <div className="white f1 f-headline-ns tc db mb3 mb4-ns" title="Home"><span className='quickkiss'>Verba</span><span className="quickkiss">Maximus</span> | <span className='white'>{new Date().getFullYear()}</span></div>
                {
                (timeLeft && timeLeft.days+timeLeft.minutes+timeLeft.seconds+timeLeft.hours !== 0) ? (
                <div className="cf">
                  <div className="fl w-25 tc pv5 bg-white-20 br">
                      {timeLeft.days} Days
                  </div>
                  <div className="fl w-25 tc pv5 bg-white-20 br">
                      {timeLeft.hours} Hours
                  </div>
                  <div className="fl w-25 tc pv5 bg-white-20 br">
                      {timeLeft.minutes} Minutes
                  </div>
                  <div className="fl w-25 tc pv5 bg-white-20">
                      {timeLeft.seconds} Seconds
                  </div>
                </div>) : (
                <section className="ph3 ph3-ns pv3">
                    <article className="mw7 center br2 ba b--light-blue bg-white">
                    <div className="dt-ns dt--fixed-ns w-100">
                        <div className="pa3 pa4-ns dtc-ns v-mid">
                        <div>
                            <h2 className="fw4 purple mt0 mb3">Registrations are now open!!</h2>
                            <p className="black-70 measure lh-copy mv0">#HappilyNeverAfter</p>
                        </div>
                        </div>
                        <div className="pa3 pa4-ns dtc-ns v-mid">
                        <a href="#" className="no-underline f6 tc db w-100 pv3 bg-animate bg-purple hover-bg-dark-purple white br2">Register Now</a>
                        </div>
                    </div>
                    </article>
                </section>
                )
                }
                <div className="bt bb tc mw7 center mt4 bg-white">
                  <Link className="f6 f5-l link bg-animate black-80 hover-bg-purple dib pa3 ph4-l" to="/Events">Events</Link>
                  <Link className="f6 f5-l link bg-animate black-80 hover-bg-purple dib pa3 ph4-l" to="/Team">Team</Link>
                  <Link className="f6 f5-l link bg-animate black-80 hover-bg-purple dib pa3 ph4-l" to="/Sponsors">Sponsors</Link>
                  <Link className="f6 f5-l link bg-animate black-80 hover-bg-purple dib pa3 ph4-l" to="/Contact">Contact</Link>
                  <Link className="f6 f5-l link bg-animate black-80 hover-bg-purple dib pa3 ph4-l" to="/Schedule">Schedule</Link>
                </div>
            </div>
        </div>

        <div className='content'>
          <div className='headline1 white'>
            <img src = {sherlock} className='home-image'/>
            <Fade right>
            <div className='headline-desc'>
              <h1 className='quickkiss'>SHERLOCKED</h1>
              <hr className='hrWidth'/>
                  <p>
                  Nullam ornare, nisi eget vulputate pellentesque, metus metus tempor nisl, ut malesuada lacus lectus in nunc. Cras dapibus scelerisque nunc, sed tempus magna ultricies vel. Phasellus a leo sit amet eros euismod finibus nec eu orci. Suspendisse quis diam nec neque facilisis vestibulum non a diam. Pellentesque et vestibulum lorem, vel iaculis massa. Phasellus sagittis volutpat augue eu fermentum. Integer tincidunt est a nunc scelerisque dictum. Ut pretium augue ac odio molestie, at ultricies erat tempus. Maecenas tempus justo purus.
                  </p>
            </div>
            </Fade>
          </div>

          <div className='headline1 white'>
            <Fade left>
            <div className='headline-desc'>
              <h1 className='quickkiss'>ARG</h1>
              <hr className='hrWidth'/>
                  <p>
                  Nullam ornare, nisi eget vulputate pellentesque, metus metus tempor nisl, ut malesuada lacus lectus in nunc. Cras dapibus scelerisque nunc, sed tempus magna ultricies vel. Phasellus a leo sit amet eros euismod finibus nec eu orci. Suspendisse quis diam nec neque facilisis vestibulum non a diam. Pellentesque et vestibulum lorem, vel iaculis massa. Phasellus sagittis volutpat augue eu fermentum. Integer tincidunt est a nunc scelerisque dictum. Ut pretium augue ac odio molestie, at ultricies erat tempus. Maecenas tempus justo purus.
                  </p>
        
            </div>
            </Fade>
            <img src = {sherlock} className = 'home-image'/>
          </div>

          <div className='headline1 white'>
            <img src = {sherlock} className='home-image'/>
            <Fade right>
            <div className='headline-desc'>
              <h1 className='quickkiss'>SHIPWRECKED</h1>
              <hr className='hrWidth'/>
                <p>
                  Nullam ornare, nisi eget vulputate pellentesque, metus metus tempor nisl, ut malesuada lacus lectus in nunc. Cras dapibus scelerisque nunc, sed tempus magna ultricies vel. Phasellus a leo sit amet eros euismod finibus nec eu orci. Suspendisse quis diam nec neque facilisis vestibulum non a diam. Pellentesque et vestibulum lorem, vel iaculis massa. Phasellus sagittis volutpat augue eu fermentum. Integer tincidunt est a nunc scelerisque dictum. Ut pretium augue ac odio molestie, at ultricies erat tempus. Maecenas tempus justo purus.
                </p>
            </div>
            </Fade>
          </div>

          <div className='headline1 white'>
            <Fade left>
            <div className='headline-desc'>
              <h1 className='quickkiss'>SUPERPOSITION</h1>
              <hr className='hrWidth'/>
                  <p>
                  Nullam ornare, nisi eget vulputate pellentesque, metus metus tempor nisl, ut malesuada lacus lectus in nunc. Cras dapibus scelerisque nunc, sed tempus magna ultricies vel. Phasellus a leo sit amet eros euismod finibus nec eu orci. Suspendisse quis diam nec neque facilisis vestibulum non a diam. Pellentesque et vestibulum lorem, vel iaculis massa. Phasellus sagittis volutpat augue eu fermentum. Integer tincidunt est a nunc scelerisque dictum. Ut pretium augue ac odio molestie, at ultricies erat tempus. Maecenas tempus justo purus.
                  </p>
        
            </div>
            </Fade>
            <img src = {sherlock} className = 'home-image'/>
          </div>

          <Link to = "/Events" className='more'>...and more!</Link>
        </div>

      </div>
      
      

    );
}

export default Home;
