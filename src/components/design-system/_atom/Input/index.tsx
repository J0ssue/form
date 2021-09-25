import React, { ChangeEvent } from "react";
import {
  InputContainer,
  InputComponent,
  InputLabel,
} from "./styled-components";

interface Props {
  type: string;
  label: string;
  placeholder: string;
  onChangeHandler: (
    e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>
  ) => void;
  value?: string;
  error?: string;
}

const Input = (props: Props) => {
  const { type, label, placeholder, onChangeHandler, value, error } = props;
  return (
    <InputContainer className="input-container">
      <InputLabel hasError={!!error}>{label}</InputLabel>
      <InputComponent
        type={type}
        value={value}
        placeholder={placeholder}
        hasError={!!error}
        onChange={onChangeHandler}
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
