import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import PropTypes from "prop-types";
import Input from "./Input";

const AutoItems = styled("div")({
  position: "relative",
  ".item_container": {
    position: "absolute",
    maxHeight: "282px",
    overflowY: "auto",
    background: "#f0f0f0",
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
    width: "100%",
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

const AutoCompleteAPI = (props) => {
  const [value, setValue] = useState("");
  const [lists, setLists] = useState([]);

  const selectUni = (value) => {
    setValue(value);
    props.getValue(value);
    setLists([]);
  };

  const searchUni = async (e) => {
    let value = e.target.value;
    setValue(value);
    props.getValue(value);
    let source;

    if (source) {
      source.cancel();
    }

    //Save the cancel token for the current request
    const CancelToken = Axios.CancelToken;
    source = CancelToken.source();

    try {
      if (!value) return;
      const result = await Axios.get(`${props.url}${value}`, {
        cancelToken: source.token,
      });
      setLists([...result.data]);
    } catch {}
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
          {lists.map((list, key) => (
            <Item key={key} onClick={(e) => selectUni(list.name)}>
              {list.name}
            </Item>
          ))}
        </div>
      </AutoItems>
    </>
  );
};

AutoCompleteAPI.propTypes = {
  url: PropTypes.string,
  value: PropTypes.string,
  getValue: PropTypes.func,
};

export default AutoCompleteAPI;
