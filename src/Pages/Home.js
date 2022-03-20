import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import sherlock from '../Images/sherlocked.jpeg';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import Particles from 'react-tsparticles';
import particlesConfig from '../Config/particlesConfig';

const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`03/21/${year}`) - +new Date(); //MM/DD/YYYY
  
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
        {/* <div className="particles">
            <Particles height="100vh" width="100vw" params={particlesConfig} />
        </div> */}
              <div className="pa3 pa4-ns">
                <div className="white f1 f-headline-ns tc db mb3 mb4-ns" title="Home"><span className='quickkiss'>Verba</span><span className="quickkiss">Maximus</span> | <span className='white'>{new Date().getFullYear()}</span></div>
                {
                (timeLeft && timeLeft.days+timeLeft.minutes+timeLeft.seconds+timeLeft.hours !== 0) ? (
                <div class="cf">
                  <div class="fl w-25 tc pv5 bg-white-20 br">
                      {timeLeft.days} Days
                  </div>
                  <div class="fl w-25 tc pv5 bg-white-20 br">
                      {timeLeft.hours} Hours
                  </div>
                  <div class="fl w-25 tc pv5 bg-white-20 br">
                      {timeLeft.minutes} Minutes
                  </div>
                  <div class="fl w-25 tc pv5 bg-white-20">
                      {timeLeft.seconds} Seconds
                  </div>
                </div>) : (
                <section class="ph3 ph3-ns pv3">
                    <article class="mw7 center br2 ba b--light-blue bg-white">
                    <div class="dt-ns dt--fixed-ns w-100">
                        <div class="pa3 pa4-ns dtc-ns v-mid">
                        <div>
                            <h2 class="fw4 purple mt0 mb3">Registrations are now open!!</h2>
                            <p class="black-70 measure lh-copy mv0">#HappilyNeverAfter</p>
                        </div>
                        </div>
                        <div class="pa3 pa4-ns dtc-ns v-mid">
                        <a href="#" class="no-underline f6 tc db w-100 pv3 bg-animate bg-purple hover-bg-dark-purple white br2">Register Now</a>
                        </div>
                    </div>
                    </article>
                </section>
                )
                }
                <div className="bt bb tc mw7 center mt4">
                  <Link className="f6 f5-l link bg-animate white-80 hover-bg-blue dib pa3 ph4-l" to="/Events">Events</Link>
                  <Link className="f6 f5-l link bg-animate white-80 hover-bg-blue dib pa3 ph4-l" to="/Team">Team</Link>
                  <Link className="f6 f5-l link bg-animate white-80 hover-bg-blue dib pa3 ph4-l" to="/Sponsors">Sponsors</Link>
                  <Link className="f6 f5-l link bg-animate white-80 hover-bg-blue dib pa3 ph4-l" to="/Contact">Contact</Link>
                  <Link className="f6 f5-l link bg-animate white-80 hover-bg-blue dib pa3 ph4-l" to="/Schedule">Schedule</Link>
                </div>
            </div>
        </div>

        <div className='headline1'>
          <img src = {sherlock} height='420' width='585'/>
          <div className='headline-desc'>
            <h1 className='geraldine'>Sherlocked</h1>
            <ScrollAnimation animateIn='fadeIn'>
              <div className='headline-desc body'>
                <p>
                Nullam ornare, nisi eget vulputate pellentesque, metus metus tempor nisl, ut malesuada lacus lectus in nunc. Cras dapibus scelerisque nunc, sed tempus magna ultricies vel. Phasellus a leo sit amet eros euismod finibus nec eu orci. Suspendisse quis diam nec neque facilisis vestibulum non a diam. Pellentesque et vestibulum lorem, vel iaculis massa. Phasellus sagittis volutpat augue eu fermentum. Integer tincidunt est a nunc scelerisque dictum. Ut pretium augue ac odio molestie, at ultricies erat tempus. Maecenas tempus justo purus.
                </p>
              </div>
            </ScrollAnimation>
            
          </div>
          
        </div>

        <div className='headline1'>
          <img src = {sherlock} height='420' width='585'/>
          <div className='headline-desc'>
            <h1 className='geraldine'>Sherlocked</h1>
            <ScrollAnimation animateIn='fadeIn'>
              <div className='headline-desc body'>
                <p>
                Nullam ornare, nisi eget vulputate pellentesque, metus metus tempor nisl, ut malesuada lacus lectus in nunc. Cras dapibus scelerisque nunc, sed tempus magna ultricies vel. Phasellus a leo sit amet eros euismod finibus nec eu orci. Suspendisse quis diam nec neque facilisis vestibulum non a diam. Pellentesque et vestibulum lorem, vel iaculis massa. Phasellus sagittis volutpat augue eu fermentum. Integer tincidunt est a nunc scelerisque dictum. Ut pretium augue ac odio molestie, at ultricies erat tempus. Maecenas tempus justo purus.
                </p>
              </div>
            </ScrollAnimation>
            
          </div>
          
        </div>

        <div className='headline1'>
          <img src = {sherlock} height='420' width='585'/>
          <ScrollAnimation animateIn='slideInRight' duration={2}>
          <div className='headline-desc'>
            <h1 className='geraldine'>Sherlocked</h1>
              <div className='headline-desc body'>
                <p>
                Nullam ornare, nisi eget vulputate pellentesque, metus metus tempor nisl, ut malesuada lacus lectus in nunc. Cras dapibus scelerisque nunc, sed tempus magna ultricies vel. Phasellus a leo sit amet eros euismod finibus nec eu orci. Suspendisse quis diam nec neque facilisis vestibulum non a diam. Pellentesque et vestibulum lorem, vel iaculis massa. Phasellus sagittis volutpat augue eu fermentum. Integer tincidunt est a nunc scelerisque dictum. Ut pretium augue ac odio molestie, at ultricies erat tempus. Maecenas tempus justo purus.
                </p>
              </div>
            
          </div>
          </ScrollAnimation>
          
        </div>
        
        
      </div>
      

    );
}

export default Home;
