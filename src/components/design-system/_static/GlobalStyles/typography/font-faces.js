import { css } from "@emotion/react";

export const manrope = {
  regular: "Manrope Regular",
  medium: "Manrope Medium",
  light: "Manrope Light",
  bold: "Manrope Bold",
  extraBold: "Manrope ExtraBold",
  extraLight: "Manrope ExtraLight",
  semiBold: "Manrope SemiBold",
};

export default css`
  /**
  * Manrope regular
  */
  @font-face {
    font-family: ${manrope.regular};
    font-style: normal;
    font-display: swap;
    src: url("${require("./fonts/Manrope/Manrope-Regular.ttf").default}")
      format("truetype");
  }

  @font-face {
    font-family: ${manrope.bold};
    font-style: normal;
    font-display: swap;
    src: url("${require("./fonts/Manrope/Manrope-Bold.ttf").default}")
      format("truetype");
  }

  @font-face {
    font-family: ${manrope.medium};
    font-style: normal;
    font-display: swap;
    src: url("${require("./fonts/Manrope/Manrope-Medium.ttf").default}")
      format("truetype");
  }
`;
