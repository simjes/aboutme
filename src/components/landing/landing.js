import React from 'react';
import Backdrop from './backdrop';
import Jumbotron from './jumbotron';
import ScrollToContent from './scrollToContent';

const Landing = () => (
  <>
    <Backdrop />
    <Jumbotron />

    <ScrollToContent />
  </>
);

export default Landing;
