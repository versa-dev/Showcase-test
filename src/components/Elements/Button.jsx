import styled from "styled-components";
import { color, space } from "styled-system";

const Button = styled("button")(
  {
    border: "none",
    outline: "none",
    padding: "8px 32px",
    cursor: "pointer",
    fontSize: "1rem",
    ":hover": {
      background: "#d4d4d4",
    },
  },
  color,
  space
);
export default Button;
