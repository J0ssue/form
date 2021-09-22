import React from "react";
import { ButtonContainer } from "./styled-components";

type ButtonTypes = "clear" | "primary" | "secondary";

export interface Props {
  /**
   * label for button
   */
  label: string;
  /**
   *  button type "clear" | "primary" | "secondary"
   */
  buttonType: ButtonTypes;
  /**
   *  button type "clear" | "primary" | "secondary"
   */
  onClickHandler: () => void;
}

const Button = (props: Props) => {
  const { label, buttonType, onClickHandler } = props;
  return (
    <ButtonContainer buttonType={buttonType} onClick={onClickHandler}>
      {label}
    </ButtonContainer>
  );
};

Button.defaultProps = {
  label: "button",
  buttonType: "clear",
};

export default Button;
