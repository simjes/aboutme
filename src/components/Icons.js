import React from "react";
import ReactSVG from "react-svg";
import Github from "../images/github.svg";
import styled from "styled-components";

// const Svg = styled(ReactSVG)`
//   height: 50px;
//   width: 50px;
// `

const Icon = ({ type }) => {
  return <Github style={{ height: 50, width: 50 }} />;
  // return (
  //   <ReactSVG
  //     alt={`${type} icon`}
  //     src={`${type}.svg`}
  //     style={{ height: 50, width: 50 }}
  //   />
  // );
};

export default Icon;
