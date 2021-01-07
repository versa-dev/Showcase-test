import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AutoCompleteAPI from "../components/Elements/AutoCompleteAPI";
import AutoComplete from "../components/Elements/AutoComplete";
import Input from "../components/Elements/Input";
import Text from "../components/Elements/Text";
import TextArea from "../components/Elements/TextArea";
import Button from "../components/Elements/Button";
import fields from "../data/fields";
import degrees from "../data/degrees";

function Form({ onSubmitData, setIsOpen }) {
  const { handleSubmit, register } = useForm({});
  const [error, setError] = useState("");
  const [uniTitle, setUniTitle] = useState("");
  const [degree, setDegree] = useState("");
  const [field, setField] = useState("");
  const [present, setPresent] = useState(false);

  const onSubmit = (formData) => {
    setError("");
    if (!uniTitle) return setError("please fill the school name");
    if (!degree) return setError("please fill the degree");
    if (!field) return setError("please fill the field of study");
    if (!formData.startDate) return setError("Please fill startDate field.");

    if (present) formData.endDate = "Present";
    if (!present) {
      if (!formData.endDate) return setError("Please fill endDate field.");
    }

    onSubmitData({
      ...formData,
      title: uniTitle,
      degree,
      field,
    });
  };

  const getUniTitle = (value) => {
    setUniTitle(value);
  };

  const getDegree = (value) => {
    setDegree(value);
  };

  const getField = (value) => {
    setField(value);
  };

  // Users must be able to enter the following information: Name of School, Degree, Field of study,

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Text color="red">{error}</Text>
      <Text ml="15px">Name</Text>
      <AutoCompleteAPI
        getValue={getUniTitle}
        placeholder="Name of School"
        url="http://universities.hipolabs.com/search?name="
      />
      <Text ml="15px">Degree</Text>
      <AutoComplete placeholder="Degree" getValue={getDegree} data={degrees} />
      <Text ml="15px">Field of study</Text>
      <AutoComplete
        placeholder="Field of study"
        getValue={getField}
        data={fields}
      />
      <Text ml="15px">start Date</Text>
      <Input
        type="date"
        name="startDate"
        placeholder="yyyy/mm/dd"
        ref={register}
      />
      {!present && (
        <div>
          <Text ml="15px">end Date</Text>
          <Input
            type="date"
            name="endDate"
            placeholder="yyyy/mm/dd"
            ref={register}
          />
        </div>
      )}
      <div style={{ display: "flex" }}>
        <Input
          type="checkbox"
          onChange={(e) => setPresent(e.target.checked)}
          width="20px"
          label="Present"
        />
        <Text ml="15px" mt="5px">
          Present
        </Text>
      </div>
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
