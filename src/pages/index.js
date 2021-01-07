import React from "react";
import Container from "../components/Elements/Container";
import Home from "./Home";
import Main from "./Main";

const Index = () => {
  return <Container>{true ? <Main /> : <Home />}</Container>;
};

export default Index;
