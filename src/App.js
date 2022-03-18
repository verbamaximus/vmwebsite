import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import tachyons from 'tachyons';

import Particles from 'react-tsparticles';
import particlesConfig from './Config/particlesConfig';

const calculateTimeLeft = () => {
  let year = new Date().getFullYear();
  let difference = +new Date(`03/14/${year}`) - +new Date(); //MM/DD/YYYY

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

function App() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <div className="App">
      <div className="App-header">
        <div className="particles">
          <Particles height="100vh" width="100vw" params={particlesConfig} />
        </div>
        <div className="pa3 pa4-ns">
          <div className="white b f1 f-headline-ns tc db mb3 mb4-ns" title="Home"><span className='word1'>Verba</span><span className="word2">Maximus</span><span className='dark-blue'>{new Date().getFullYear()}</span></div>
          {
          (timeLeft.days+timeLeft.minutes+timeLeft.seconds+timeLeft.hour != 0) ? (<div class="cf">
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
            <a className="f6 f5-l link bg-animate white-80 hover-bg-blue dib pa3 ph4-l" href="/">Home</a>
            <a className="f6 f5-l link bg-animate white-80 hover-bg-blue dib pa3 ph4-l" href="/portfolio">Events</a>
            <a className="f6 f5-l link bg-animate white-80 hover-bg-blue dib pa3 ph4-l" href="/shop">Team</a>
            <a className="f6 f5-l link bg-animate white-80 hover-bg-blue dib pa3 ph4-l" href="/about">Sponsors</a>
            <a className="f6 f5-l link bg-animate white-80 hover-bg-blue dib pa3 ph4-l" href="/contact">Contact</a>
            <a className="f6 f5-l link bg-animate white-80 hover-bg-blue dib pa3 ph4-l" href="/contact">Schedule</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
