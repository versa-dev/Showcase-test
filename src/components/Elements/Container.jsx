import styled from "styled-components";
import { color, space } from "styled-system";

const Container = styled("div")(
  {
    maxWidth: "1200px",
    margin: "auto",
    textAlign: "center",
    position: "relative",
  },
  color,
  space
);
export default Container;
