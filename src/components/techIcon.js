import React from 'react';
import Angular from '../images/angular.svg';
import Jest from '../images/jest.svg';

// https://iconify.design/
// TODO: npm install iconify instead
const TechIcon = ({ icon, ...rest }) => {
  switch (icon) {
    case 'angular':
      return <Angular {...rest}  />;

    case 'jest':
      return <Jest {...rest} />;

    default:
      return null;
  }
};

export default TechIcon;
