import React from "react";
import {
  InputContainer,
  InputComponent,
  InputLabel,
} from "./styled-components";

interface Props {
  type: string;
  label: string;
  placeholder: string;
  hasError: boolean;
  onChange?: () => void;
}

const Input = (props: Props) => {
  const { type, hasError, label, placeholder, onChange } = props;
  return (
    <InputContainer>
      <InputLabel hasError={hasError}>{label}</InputLabel>
      <InputComponent
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        hasError={hasError}
      ></InputComponent>
    </InputContainer>
  );
};

Input.defaultProps = {
  label: "input",
  type: "text",
  placeholder: "string",
  hasError: false,
};

export default Input;
