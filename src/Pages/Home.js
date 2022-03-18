import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`03/21/${year}`) - +new Date(); //MM/DD/YYYY
  
    let timeLeft = {};
  
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
            <div className="pa3 pa4-ns">
                <div className="white f1 f-headline-ns tc db mb3 mb4-ns" title="Home"><span className='word1'>Verba</span><span className="word2">Maximus</span> | <span className='dark-blue'>{new Date().getFullYear()}</span></div>
                {
                (timeLeft.days+timeLeft.minutes+timeLeft.seconds+timeLeft.hour !== 0) ? (<div class="cf">
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
    );
}

export default Home;
