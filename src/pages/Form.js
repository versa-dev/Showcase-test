import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AutoCompleteAPI from "../components/Elements/AutoCompleteAPI";
import Input from "../components/Elements/Input";
import Text from "../components/Elements/Text";
import TextArea from "../components/Elements/TextArea";
import Button from "../components/Elements/Button";

function Form({ onSubmitData, setIsOpen }) {
  const { handleSubmit, register } = useForm({});

  const [uniTitle, setUniTitle] = useState("");

  const onSubmit = (formData) => {
    if (!uniTitle) return;
    onSubmitData({
      ...formData,
      title: uniTitle,
    });
  };

  const getUniTitle = (value) => {
    setUniTitle(value);
  };

  // Users must be able to enter the following information: Name of School, Degree, Field of study,

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Text ml="15px">Name</Text>
      <AutoCompleteAPI
        getValue={getUniTitle}
        placeholder="Name of School"
        url="http://universities.hipolabs.com/search?name="
      />
      <Text ml="15px">Degree</Text>
      <Text ml="15px">Field of study</Text>
      <Text ml="15px">start Date</Text>
      <Input
        type="date"
        name="startDate"
        placeholder="yyyy/mm/dd"
        ref={register}
      />
      <Text ml="15px">end Date</Text>
      <Input
        type="date"
        name="endDate"
        placeholder="yyyy/mm/dd"
        ref={register}
      />
      <Text>Description</Text>
      <TextArea ref={register} mb="15px" name="description" />
      <br />
      <Button onClick={(e) => setIsOpen(false)}>Cancel</Button>
      <Button ml="20px" type="submit" onClick={handleSubmit(onSubmit)}>
        Save
      </Button>
    </form>
  );
}

export default Form;
