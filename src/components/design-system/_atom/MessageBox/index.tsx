import React from "react";
import Text from "../Text";
import buildColor from "../../_static/colorPalette";

import { MessageBoxContainer } from "./styled-components";

interface Props {
  /**
   * Adds Message
   * */
  message: string;
  /**
   * Type of message: success | error
   * */
  type: "success" | "error";
}

const MessageBox = (props: Props) => {
  return (
    <MessageBoxContainer type={props.type}>
      <Text color={buildColor("black", "700")} text={props.message} />
    </MessageBoxContainer>
  );
};

MessageBox.defaultProps = {
  message: "",
};

export default MessageBox;
