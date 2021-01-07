import styled from "styled-components";
import { color, space, layout } from "styled-system";

const TextArea = styled.textarea`
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  min-height: 150px;
  padding: 15px;
  font-size: 18px;
  outline: none;
  ${color}
  ${space}
  ${layout}
`;
export default TextArea;
