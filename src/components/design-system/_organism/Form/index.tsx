import React from "react";

import { FormSchema } from "app/schemas/types";

import Button from "../../_atom/Button";
import Input from "../../_atom/Input";
import SelectInput from "../../_atom/SelectInput";
import MessageBox from "../../_atom/MessageBox";
import InformationBox from "../../_molecule/InformationBox";

import {
  FormContainer,
  FormEl,
  TableContainer,
  Caption,
} from "./styled-components";

interface Props {
  /**
   * Adds elements according to form schema
   * */
  formSchema?: FormSchema;
  /**
   * List of options for select element
   * */
  options?: string[];
  /**
   * Handles form submission
   * */
  onFormSubmit: () => any;
  /**
   * Display submit success message
   * */
  onSubmitSuccess?: boolean;
  /**
   * Display submit error message
   * */
  onSubmitError?: boolean;
}

const Form = (props: Props) => {
  const { formSchema, options, onFormSubmit, onSubmitSuccess, onSubmitError } =
    props;

  const renderInputs = () =>
    formSchema &&
    formSchema.inputs.map((input) => {
      if (input.type === "select") {
        return (
          <SelectInput
            key={input.id}
            label={input.label}
            placeholder={input.placeholder}
            options={options}
          />
        );
      }
      return (
        <Input
          type={input.type}
          key={input.id}
          label={input.label}
          placeholder={input.placeholder}
        />
      );
    });

  return (
    <FormContainer>
      <FormEl>
        {renderInputs()}
        <Button label={formSchema?.button} onClickHandler={onFormSubmit} />
        {onSubmitSuccess && (
          <MessageBox
            message={formSchema?.successMessage || ""}
            type="success"
          />
        )}
        {onSubmitError && (
          <MessageBox message={formSchema?.errorMessage || ""} type="error" />
        )}
      </FormEl>
      <TableContainer>
        <InformationBox />
      </TableContainer>
      <Caption>{formSchema?.caption}</Caption>
    </FormContainer>
  );
};

export default Form;
