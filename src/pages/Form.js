import React from "react";
import { useForm } from "react-hook-form";
import Input from "../components/Elements/Input";
import TextArea from "../components/Elements/TextArea";
import Text from "../components/Elements/Text";
import Button from "../components/Elements/Button";

function Form({ onSubmitData, setIsOpen }) {
  const { handleSubmit, register } = useForm({});

  const onSubmit = (formData) => {
    onSubmitData({
      ...formData,
    });
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Text ml="15px">Name</Text>
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
      <br />
      <Button onClick={(e) => setIsOpen(false)}>Cancel</Button>
      <Button ml="20px" type="submit" onClick={handleSubmit(onSubmit)}>
        Save
      </Button>
    </form>
  );
}

export default Form;
