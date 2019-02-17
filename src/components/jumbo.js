import React from "react";
import styled from "styled-components";

const Root = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  color: #fff;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Jumbotron = styled.div`
  position: absolute;
  text-align: center;
`;

const H1 = styled.h1`
  padding: 10px;
  font-size: 4rem;
  margin: 0;
`;

const H2 = styled.h2`
  padding: 10px;
  font-size: 2rem;
  margin: 0;
`;

const Jumbo = () => {
  return (
    <Root>
      <Jumbotron>
        <H1>Simon Jespersen</H1>
        <H2>@simjes</H2>
      </Jumbotron>
    </Root>
  ); //Todo: add arrow down
};

export default Jumbo;
