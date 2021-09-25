import React from "react";

import { InputContainer, Select, SelectButton } from "./styled-components";

interface Props {
  /**
   * Adds label to select component
   */
  label: string;
  /**
   * Options array to build select input options
   */
  options: string[];
  /**
   * Adds placeholder to select element
   */
  placeholder: string;
  /**
   * Handles select change
   */
  onChangeHandler: (
    e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>
  ) => void;
  /**
   * Sets input value
   */
  value?: any;
  /**
   * Sets input error
   */
  error?: Partial<Record<string, string>>;
}

const SelectInput = (props: Props) => {
  const { options, label, placeholder, onChangeHandler, error } = props;

  const renderOptions = (items: string[]) => {
    if (placeholder) {
      return [
        <option key={placeholder} disabled hidden>
          {placeholder}
        </option>,
        ...items.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        )),
      ];
    }

    return items.map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ));
  };

  return (
    <InputContainer className="input-container" hasError={!!error}>
      <label>{label}</label>
      <Select
        defaultValue={placeholder}
        onChange={onChangeHandler}
        hasError={!!error}
      >
        {options && renderOptions(options)}
      </Select>
      <SelectButton hasError={!!error}>▼</SelectButton>
    </InputContainer>
  );
};

SelectInput.defaultProps = {
  label: "label",
  options: [],
  placeholder: "placeholder",
};

export default SelectInput;
