import palette from "./palette.json";

export const buildColor = <
  Color extends keyof typeof palette,
  Variation extends keyof typeof palette[Color]
>(
  color: Color,
  variation: Variation
) => palette[color][variation];

export default buildColor;
