import React from "react";
import { useSelector } from "react-redux";
import Container from "../components/Elements/Container";
import Home from "./Home";
import Main from "./Main";

const Index = () => {
  const { name } = useSelector((state) => state.education);
  return <Container>{!name ? <Main /> : <Home />}</Container>;
};

export default Index;
