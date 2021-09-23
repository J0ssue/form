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
  onChangeHandler?: (() => any) | undefined;
}

const SelectInput = (props: Props) => {
  const { options, label, placeholder, onChangeHandler } = props;

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
    <InputContainer className="input-container">
      {label}
      <Select defaultValue={placeholder} onChange={onChangeHandler}>
        {options && renderOptions(options)}
      </Select>
      <SelectButton>▼</SelectButton>
    </InputContainer>
  );
};

SelectInput.defaultProps = {
  label: "label",
  options: [],
  placeholder: "placeholder",
};

export default SelectInput;
