import styled from "styled-components";
import { color, space, layout } from "styled-system";

const Input = styled("input")(
  {
    outline: "none",
    height: "30px",
    fontSize: "18px",
    width: "96%",
    outLine: "none",
    border: "1px solid gray",
    borderRadius: "50px",
    paddingLeft: "15px",
    paddingRight: "15px",
  },
  color,
  space,
  layout
);

export default Input;
