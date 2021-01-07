import React, { useState } from "react";
import styled from "styled-components";
import { color, space } from "styled-system";
import PropTypes from "prop-types";
import Input from "./Input";

const AutoItems = styled("div")({
  position: "relative",
  ".item_container": {
    position: "absolute",
    background: "#f0f0f0",
    width: "100%",
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
    zIndex: 1,
  },
});

const Item = styled("div")({
  cursor: "pointer",
  padding: "5px",
  "&:hover": {
    background: "gray",
  },
});

const AutoComplete = (props) => {
  const [value, setValue] = useState("");
  const [lists, setLists] = useState([]);

  const selectUni = (value) => {
    setValue(value);
    props.getValue(value);
    setLists([]);
  };

  const searchUni = (e) => {
    setValue(e.target.value);
    props.getValue(value);
    let filterData = props.data.filter((data) => {
      if (data.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1)
        return true;
      return false;
    });
    setLists([...filterData]);
  };

  return (
    <>
      <AutoItems>
        <Input
          value={value}
          onChange={searchUni}
          onClick={(e) => setLists([])}
          {...props}
        />
        <div className="item_container">
          {lists.splice(0, 10).map((list, key) => (
            <Item key={key} onClick={(e) => selectUni(list)}>
              {list}
            </Item>
          ))}
        </div>
      </AutoItems>
    </>
  );
};

AutoComplete.propTypes = {
  data: PropTypes.array,
  getValue: PropTypes.func,
};

export default AutoComplete;
