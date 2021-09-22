import React from "react";
import buildColor from "../../_static/colorPalette";

import { TextComp } from "./styled-components";

interface Props {
  /**
   * defines element tag
   * */
  tag: React.ElementType<string> | undefined;
  /**
   * defines color
   * */
  color: string;
  /**
   * defines text-align
   * */
  align: string;
  /**
   * defines font-size
   * */
  size: number;
  /**
   * defines text-transform
   * */
  transform: string;
  /**
   * defines line-height
   * */
  lineHeight?: number;
  /**
   * inserts text
   * */
  text?: string;
}

const Text = (props: Props): JSX.Element => {
  return (
    <TextComp {...props} as={props.tag}>
      {props.text || ""}
    </TextComp>
  );
};

Text.defaultProps = {
  color: buildColor("black", "900"),
  size: 12,
  transform: "none",
  tag: "p",
  align: "left",
};

export default Text;
