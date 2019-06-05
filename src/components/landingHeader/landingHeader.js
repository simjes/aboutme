import React from 'react';
import Backdrop from './backdrop';
import Jumbotron from './jumbotron';
import ScrollToContent from './scrollToContent';

const LandingHeader = props => (
  <header>
    <Backdrop />
    <Jumbotron />

    <ScrollToContent />
  </header>
);

export default LandingHeader;
