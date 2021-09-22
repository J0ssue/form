import { css } from "@emotion/react";
import normalize from "emotion-normalize";
import fontFaces from "./typography/font-faces";
import typography from "./typography";

export default css`
  ${fontFaces}
  ${normalize}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
  }

  a {
    line-height: 1;
  }

  body {
    ${typography.body};
  }

  /**
     * Override Firefox's stylesheet for red box shadow on invalid fields
     * @see view-source:resource://gre-resources/forms.css
     */

  :not(output):-moz-ui-invalid {
    box-shadow: none;
  }

  :not(output):-moz-ui-invalid:-moz-focusring {
    box-shadow: none;
  }
`;
