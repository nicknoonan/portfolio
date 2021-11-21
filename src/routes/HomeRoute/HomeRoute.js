import React from "react";
import './HomeRoute.css';
let intro_header_text = "Adventure Awaits!";
let intro_subheading_text = "Mountains can’t climb themselves. Computers don’t program themselves. What are you waiting for? Go embark on your life’s adventure! ";
let greeting_text = "Hi there I’m Nick, I’m a computer scientist that loves embedded systems, cloud architecture, bourbon, and adventures. Welcome to nicknoonan.net. P.S. I’m probably staring a computer screen writing code right now.";
let about_header_text = "learn more about me!";
let about_subheading_text = "Trust me I’m not that interesting, but here’s a page dedicated to me by me. I enjoy nerdy science stuff, programming, outdoor adventures, and counting the number of atoms in the universe.";
let _400_300 = "https://via.placeholder.com/400x300";
let _200_150 = "https://via.placeholder.com/200x150";
let climbing_gif = "tr.gif"
let headshot = "headshot.jpg"
function HomeRoute() {
  //console.log(window.innerWidth);
  //if (window.innerWidth > 1100) {
  //  headshot = _400_300;
  //}
  //else {
  //  headshot = _200_150;
  //  alert("here");
  //}
  //console.log(document.getElementById("navigation-link navigation-home"));
  //console.log(document.querySelector("nav-home"));
  return (
    <div className='homeroute'>
      {/* intro */}
      <div className='homeroute-intro-break break'>
        {/* display contents flex but centered horizontally */}
        <div className='flex-container'>
          {/* intro heading container */}
          <div className='homeroute-header-container heading-container'>
            {/* intro image header */}
            <div className='homeroute-header'>
              <h1>{intro_header_text}</h1>
            </div>
            {/* intro image subheading */}
            <div className='homeroute-subheading'>
              <p1>{intro_subheading_text}</p1>
            </div>
          </div>
          {/* headshot or somesort of background overlay */}
          <div className='homeroute-headshot'>
            <img id="climbing-gif" src={climbing_gif}></img>
          </div>
        </div>
      </div>
      {/* greeting */}
      <div className='homeroute-greeting-break break'>
        <div className='homeroute-greeting'>
          <h2>{greeting_text}</h2>
        </div>
      </div>
      {/* about summary */}
      <div className='homeroute-about-break break'>
        {/* display contents flex but centered horizontally */}
        <div className='flex-container'>
          {/* headshot or somesort of background overlay */}
          <div className='homeroute-headshot'>
            <img src="headshot.jpg"></img>
          </div>
          <div className='homeroute-about-container heading-container'>
            {/* intro image header */}
            <div className='homeroute-header'>
              <h1>{about_header_text}</h1>
            </div>
            {/* intro image subheading */}
            <div className='homeroute-subheading'>
              <p1>{about_subheading_text}</p1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeRoute;