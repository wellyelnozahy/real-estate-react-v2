import React, { Component } from 'react';
import './Services.css';
import Action from '../../Reusable/Action/Action.js';
import Navbar from '../../Reusable/Navbar/Navbar.js';
import Header from './Header/Header.js';
import Sections from './Sections/Sections.js';
import Getintouch from '../../Reusable/Getintouch/Getintouch.js';
import Footer from '../../Reusable/Footer/Footer.js';







class Services extends Component {
  render() {
    return (
      <div className="">
      <Action />
        <Navbar />
        <Header />
        <Sections />





        <Getintouch />
        <Footer />
      </div>
    );
  }
}

export default Services;
