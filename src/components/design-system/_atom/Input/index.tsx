import React from "react";
import { get } from "lodash";
import {
  InputContainer,
  InputComponent,
  InputLabel,
  InputTextContainer,
  InputError,
} from "./styled-components";

interface Props {
  type: string;
  label: string;
  placeholder: string;
  error?: {
    message?: string;
  };
  onChange?: () => void;
}

const Input = (props: Props) => {
  const { error, label, placeholder, onChange } = props;
  const hasError = () => error && error.message;
  return (
    <InputContainer>
      <InputTextContainer>
        <InputLabel hasError={hasError}>{label}</InputLabel>
        {error && (
          <InputError>{error.message && get(error, "message")}</InputError>
        )}
      </InputTextContainer>
      <InputComponent
        onChange={onChange}
        placeholder={placeholder}
        hasError={get(error, "message")}
      ></InputComponent>
    </InputContainer>
  );
};

Input.defaultProps = {
  label: "input",
  type: "string",
  placeholder: "string",
};

export default Input;
