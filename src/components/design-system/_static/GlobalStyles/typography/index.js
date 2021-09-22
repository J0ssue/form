import { css } from "@emotion/react";
import { manrope } from "./font-faces";

const typography = {
  h1: css`
    font-family: ${manrope.bold};
    font-size: 56px;
    text-transform: uppercase;
    line-height: 58px;
    letter-spacing: 2px;
  `,
  h2: css`
    font-family: ${manrope.bold};
    font-size: 40px;
    text-transform: uppercase;
    line-height: 44px;
    letter-spacing: 1.5px;
  `,
  h3: css`
    font-family: ${manrope.bold};
    font-size: 32px;
    text-transform: uppercase;
    line-height: 36px;
    letter-spacing: 1.15px;
  `,
  h4: css`
    font-family: ${manrope.bold};
    font-size: 28px;
    text-transform: uppercase;
    line-height: 38px;
    letter-spacing: 2px;
  `,
  h5: css`
    font-family: ${manrope.bold};
    font-size: 24px;
    text-transform: uppercase;
    line-height: 33px;
    letter-spacing: 1.7px;
  `,
  h6: css`
    font-family: ${manrope.bold};
    font-size: 18px;
    text-transform: uppercase;
    line-height: 24px;
    letter-spacing: 1.3px;
  `,
  overline: css`
    font-family: ${manrope.regular};
    font-size: 14px;
    text-transform: uppercase;
    line-height: 19px;
    letter-spacing: 10px;
  `,
  subtitle: css`
    font-family: ${manrope.medium};
    font-size: 13px;
    text-transform: uppercase;
    line-height: 25px;
    letter-spacing: 1px;
  `,
  body: css`
    font-family: ${manrope.medium};
    font-size: 15px;
    line-height: 25px;
  `,
};

export default typography;
