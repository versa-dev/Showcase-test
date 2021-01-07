import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";
import MainWrapper from "./MainWrapper.style";
import { actions } from "../redux/education";
import Text from "../components/Elements/Text";
import Button from "../components/Elements/Button";
import Box from "../components/Elements/Box";
import Form from "./Form";

export default function Main() {
  const dispatch = useDispatch();
  const { name, educations } = useSelector((state) => state.education);
  const [isOpen, setIsOpen] = useState(false);

  const addEducation = (e) => {
    dispatch(actions.addEducation(e));
    setIsOpen(false);
  };

  return (
    <MainWrapper>
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
        <Box width={[1 / 4]} m="5px" bg="#dddddd" height="300px">
          {educations.map((education, key) => (
            <Box className="nav_item" bg="#f0f0f0" mb="10px" p="10px" key={key}>
              {education.title}
            </Box>
          ))}
        </Box>
        <Box width={[3 / 4]} m="5px">
          {educations.map((education, key) => (
            <Box key={key} bg="gray" mb="10px" p="20px">
              <div className="flex">
                <Text m="0px" mr="10px">
                  {education.degree}
                </Text>
                <Text m="0px">@</Text>
                <Text m="0px" ml="10px">
                  {education.field}
                </Text>
              </div>
              <div className="flex">
                <Text m="0px" mr="10px">
                  {education.startDate}
                </Text>
                <Text m="0px">~</Text>
                <Text m="0px" ml="10px">
                  {education.endDate}
                </Text>
              </div>
              <div className="flex">
                <Text m="0px">{education.description}</Text>
              </div>
            </Box>
          ))}
        </Box>
      </div>
    </MainWrapper>
  );
}
