import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <Root>
    <q>Dark theme everything</q>

    <small>Icons by Icons8:</small>

    <AttributionLinks>
      <a
        href="https://icons8.com/icon/8808/linkedin-filled"
        title="https://icons8.com/icon/8808/linkedin-filled"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        href="https://icons8.com/icon/106567/github"
        title="https://icons8.com/icon/106567/github"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </AttributionLinks>
  </Root>
);

export default Footer;

const Root = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 50px;
`;

const AttributionLinks = styled.small`
  > a {
    padding: 0 4px;
  }
`;
