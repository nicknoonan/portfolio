import React from "react";
import './HomeRoute.css';
import Arrow from '../../components/Arrow/Arrow';
let intro_header_text = "Adventure Awaits!";
let intro_subheading_text = "Mountains can’t climb themselves. Computers don’t program themselves. What are you waiting for? Go embark on your life’s adventure! ";
let greeting_text = "Hi there I’m Nick, I’m a computer scientist that loves embedded systems, cloud architecture, linux, and adventures. Welcome to nicknoonan.net. P.S. I’m probably staring a computer screen writing code right now.";
let about_header_text = "Learn more about me!";
let about_subheading_text = "Trust me I’m not that interesting, but here’s a page dedicated to me by me. I enjoy nerdy science stuff, programming, outdoor adventures, and counting the number of atoms in the universe.";
let climbing_gif = "tr.gif"
let headshot = "headshot.jpg"
function HomeRoute() {
  return (
    <div className='homeroute'>
      <Intro />
      <Greeting />
      <About />
    </div>
  );
}
function Intro() {
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
          <img id="climbing-gif" src={climbing_gif} alt="climbing jim dandy on table rock, nc"></img>
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