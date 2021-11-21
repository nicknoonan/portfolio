import { Route, Routes, Link } from "react-router-dom";
import HomeRoute from './HomeRoute/HomeRoute';
import AboutRoute from './AboutRoute/AboutRoute';
import WorkRoute from './WorkRoute/WorkRoute';
import ContactRoute from './ContactRoute/ContactRoute';
import { useState } from 'react';


function AllRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<HomeRoute />} />
      <Route exact path="/about" element={<AboutRoute />} />
      <Route exact path="/work" element={<WorkRoute />} />
      <Route exact path="/contact" element={<ContactRoute />} />
    </Routes>
  );
}
const navinactive = "navigation-link";
const navactive = "navigation-link navigation-active";
let initial_links = [
  {
    to: '/',
    val: 'home',
    key: '0'
  },
  {
    to: '/about',
    val: 'about',
    key: '1'
  },
  {
    to: '/work',
    val: 'work',
    key: '2'
  },
  {
    to: '/contact',
    val: 'contact',
    key: '3'
  }
];

function Navigation() {
  const location = window.location.pathname;
  function handleNav(event) {
    location = event.target.props.to;
  }
  console.log(location);
  let links_render = initial_links.map((link) => {
    let class_name = (link.to === location) ? navactive : navinactive;
    return <Link className={class_name} to={link.to} key={link.key} onClick={handleNav}>{link.val}</Link>;
  });
  return (
    <div className='navigation'>
      <div className='navigation-links'>
        {links_render}
      </div>
      <div className='navigation-icons'>
        <a href='https://github.com/nicknoonan'><img id='github' src='github.jpg' /></a>
        <a href='https://www.linkedin.com/in/nicholasnoonan/'><img id="linkedin" src='linkedin.png' /></a>
      </div>
    </div>
  );
}

export { AllRoutes, Navigation };

