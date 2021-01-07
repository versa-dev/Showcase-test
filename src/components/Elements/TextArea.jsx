import styled from "styled-components";
import { color, space, layout } from "styled-system";

const TextArea = styled.textarea`
  width: calc(100% - 30px);
  max-width: calc(100% - 30px);
  min-width: calc(100% - 30px);
  min-height: 150px;
  padding: 15px;
  font-size: 18px;
  outline: none;
  ${color}
  ${space}
  ${layout}
`;
export default TextArea;
