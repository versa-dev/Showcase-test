import React, { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal";
import Text from "../components/Elements/Text";
import Button from "../components/Elements/Button";
import Box from "../components/Elements/Box";
import Form from "./Form";

export default function Main() {
  const { name } = useSelector((state) => state.education);
  const [isOpen, setIsOpen] = useState(false);

  const addEducation = (e) => {
    setIsOpen(false);
  };

  return (
    <div>
      <Modal isOpen={isOpen} ariaHideApp={false}>
        <Form
          onSubmitData={(e) => addEducation(e)}
          setIsOpen={(e) => setIsOpen(e)}
        />
      </Modal>
      <Text mt="100px" mb="30px">
        Welcome to {name}'s education page
      </Text>
      <Button onClick={(e) => setIsOpen(true)}>Add new education</Button>
      <div style={{ display: "flex" }}>
        <Box width={[1 / 4]} m="5px" bg="red" height="300px"></Box>
        <Box width={[3 / 4]} m="5px"></Box>
      </div>
    </div>
  );
}
