import React from "react";
import './HomeRoute.css';
import Arrow from '../../components/Arrow/Arrow';
import {useState} from 'react';
let intro_header_text = "Adventure Awaits!";
let intro_subheading_text = "Mountains can’t climb themselves. Computers don’t program themselves. What are you waiting for? Go embark on your life’s adventure! ";
let greeting_text = "Hi there I’m Nick, I’m a computer scientist that loves embedded systems, cloud architecture, linux, and adventures. Welcome to nicknoonan.net. P.S. I’m probably staring a computer screen writing code right now.";
let about_header_text = "Learn more about me!";
let about_subheading_text = "Trust me I’m not that interesting, but here’s a page dedicated to me by me. I enjoy nerdy science stuff, programming, outdoor adventures, and counting the number of atoms in the universe.";
const climbing_gifs = [
  {
    src:"https://saportfolio.blob.core.windows.net/portfolio/good_heavens.gif",
    alt:"climbing good heavens, nc"
  },
  {
    src:"https://saportfolio.blob.core.windows.net/portfolio/tablerock.gif",
    alt:"climbing jim dandy on table rock, nc"
  },
  {
    src:"https://saportfolio.blob.core.windows.net/portfolio/lg_rap.gif",
    alt:"linville gorge rapel"
  },
  {
    src:"https://saportfolio.blob.core.windows.net/portfolio/senaca_climb.gif",
    alt:"climbing senaca west virginia"
  }
];
let headshot = "https://saportfolio.blob.core.windows.net/portfolio/headshot.jpg";
function HomeRoute() {
  return (
    <div className='homeroute'>
      <Intro />
      <Greeting />
      <About />
    </div>
  );
}
function Gifs(props) {
  return (
    props.gifs.map((gif, index) => {
      console.log(props.id);
      let className = (props.id !== index) ? "disableImage" : "enabledImage";
      return(<img key={index} src={gif.src} alt={gif.alt} className={className}/>);
    })
  )
}
function Intro() {
  const [climbingGifId, setClimbingGifId] = useState(0);
  return (
    <div className='homeroute-intro-break break' >
      {/* display contents flex but centered horizontally */}
      <div className='flex-container' >
        {/* intro heading container */}
        <div className='homeroute-header-container heading-container' >
          {/* intro image header */}
          <div className='homeroute-header' >
            <h1>{intro_header_text}</h1>
          </div>
          {/* intro image subheading */}
          <div className='homeroute-subheading' >
            <p1>{intro_subheading_text}</p1>
          </div>
        </div>
        {/* headshot or somesort of background overlay */}
        <div className='homeroute-gif'>
          <div className='climbing-gif-container'>
            <Gifs gifs={climbing_gifs} id={Math.abs(climbingGifId)}/>
            <button onClick={() => setClimbingGifId((climbingGifId + 1) % climbing_gifs.length)} id="climbing-btn-right" class="climbing-btn-right"><i id="climbing-btn-right" class="climbing-gif-arrow climbing-gif-arrow-right"></i></button>
            <button onClick={() => setClimbingGifId((climbingGifId - 1) % climbing_gifs.length)} id="climbing-btn-left" class="climbing-btn-left"><i id="climbing-btn-left" class="climbing-gif-arrow climbing-gif-arrow-left"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
}
function Greeting() {
  return (
    <div className='homeroute-greeting-break break'>
      {/* greeting text container */}
      <div className='homeroute-greeting'>
        {/* greeting text */}
        <h2>{greeting_text}</h2>
      </div>
    </div>
  );
}
function About() {
  return (
    <div className='homeroute-about-break break'>
      {/* display contents flex but centered horizontally */}
      <div className='flex-container' >
        {/* headshot or somesort of background overlay */}
        <div className='homeroute-headshot'>
          {/* headshot image */}
          <a href='/about'><img src={headshot} id="headshot" alt='nick noonan'></img></a>
        </div>
        <div className='homeroute-about-container heading-container'>
          <div classname='about-arrow'>
            <a href='/about'><Arrow /></a>
          </div>
          <div className='homeroute-header'>
            <a href='/about'><h1>{about_header_text}</h1></a>
          </div>
          {/* about subheading */}
          <div className='homeroute-subheading'>
            {/* about text */}
            <a href='/about'><p1>{about_subheading_text}</p1></a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeRoute;