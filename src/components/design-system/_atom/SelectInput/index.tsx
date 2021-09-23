import React from "react";

import {
  InputContainer,
  Select,
  SelectLabel,
  SelectButton,
} from "./styled-components";

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
        <option selected disabled hidden>
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
    <InputContainer>
      {label}
      <SelectLabel onChange={onChangeHandler}>
        <Select>{options && renderOptions(options)}</Select>
        <SelectButton>▼</SelectButton>
      </SelectLabel>
    </InputContainer>
  );
};

SelectInput.defaultProps = {
  label: "label",
  options: [],
  placeholder: "placeholder",
};

export default SelectInput;
