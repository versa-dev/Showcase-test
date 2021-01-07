import React, { useState } from "react";
import Input from "../components/Elements/Input";
import Button from "../components/Elements/Button";
import Text from "../components/Elements/Text";

function Home(props) {
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userName) return;
  };

  return (
    <div>
      <Text mt="150px" mb="80px">
        Hi there! Welcome to your education showcase.
      </Text>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Text m="20px">Type your name and click "Enter" below to begin!</Text>
        <Input
          className="input_name"
          width={[1 / 3]}
          placeholder="Your Name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <Button mt="20px" type="submit">
          Enter
        </Button>
      </form>
    </div>
  );
}

export default Home;
