import React from "react";
import Container from "../components/Elements/Container";
import Home from "./Home";
import Main from "./Main";

const Index = () => {
  return <Container>{false ? <Main /> : <Home />}</Container>;
};

export default Index;
