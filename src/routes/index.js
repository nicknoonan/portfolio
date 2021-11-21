import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
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

function Navigation() {
  let initial_links = [
    <Link className='navigation-link' key={0} to='/' val="home" >home</Link>,
    <Link className='navigation-link' key={1} to='/about' val="about" >about</Link>,
    <Link className='navigation-link' key={2} to='/work' val="work" >work</Link>,
    <Link className='navigation-link' key={3} to='/contact' val="contact" >contact</Link>];
  //
  const [links, set_links] = useState(initial_links);

  let navinactive = "navigation-link";
  let navactive = "navigation-link navigation-active"

  let location = window.location.pathname;
  let new_links = links.map((link) => {
    console.log(link.props.to);
    console.log(location);
    if (link.props.to === location) {
      //link.props.className += ' navigation-active';
      //return <Link className='navigation-link navigation-active' to={link.props.to}>{link.props.val}</Link>;
    }
    return link;
  });
  return (
    <div className='navigation'>
      <div className='navigation-links'>
        {links}
      </div>
      <div className='navigation-icons'>
        <a href='https://github.com/nicknoonan'><img id='github' src='github.jpg' /></a>
        <a href='https://www.linkedin.com/in/nicholasnoonan/'><img id="linkedin" src='linkedin.png' /></a>
      </div>
    </div>
  );
}

export { AllRoutes, Navigation };

