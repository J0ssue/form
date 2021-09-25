import React, { ChangeEvent } from "react";
import { isEmpty } from "lodash";
import { useForm } from "app/api/useForm";

import { FormSchema, Entry } from "app/schemas/types";

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
  onFormSubmit: (data: { [x: string]: any }) => void;
  /**
   * Handles entry click
   * */
  entryClickHandler: (entry: Entry) => any;
  /**
   * Success message
   * */
  successMessage?: string | null;
  /**
   * Sets initial values on form
   * */
  initialValues?: {};
  /**
   * User entries
   * */
  entries: Entry[];
}

const Form = (props: Props) => {
  const {
    formSchema,
    initialValues,
    options,
    onFormSubmit,
    entries,
    successMessage,
    entryClickHandler,
  } = props;

  const { handleSubmit, handleChange, data, errors } = useForm({
    validations: formSchema && formSchema.validations,
    initialValues: initialValues,
    onSubmit: (data) => onFormSubmit(data),
  });

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
            onChangeHandler={(
              e: ChangeEvent<HTMLInputElement & HTMLSelectElement>
            ) => handleChange(input.id, e)}
            // @ts-ignore
            error={errors[input.id]}
          />
        );
      }
      return (
        <Input
          key={input.id}
          type={input.type}
          label={input.label}
          placeholder={input.placeholder}
          onChangeHandler={(
            e: ChangeEvent<HTMLInputElement & HTMLSelectElement>
          ) => handleChange(input.id, e)}
          // @ts-ignore
          value={data[input.id]}
          // @ts-ignore
          error={errors[input.id]}
        />
      );
    });

  return (
    <FormContainer>
      <FormEl
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        {renderInputs()}
        <Button label={formSchema?.button} />
        {!isEmpty(errors) && !successMessage && (
          <MessageBox type="error" message={formSchema?.errorMessage} />
        )}
        {successMessage && (
          <MessageBox type="success" message={successMessage} />
        )}
      </FormEl>
      <TableContainer>
        <InformationBox
          entries={entries}
          entryClickHandler={entryClickHandler}
        />
      </TableContainer>
      <Caption>{formSchema?.caption}</Caption>
    </FormContainer>
  );
};

export default Form;
