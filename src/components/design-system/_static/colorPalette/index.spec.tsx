import palette from "./palette.json";
import { buildColor } from ".";

const paletteColorsKeys = Object.keys(palette) as (keyof typeof palette)[];

describe("Colors pallete", () => {
  it("should alert if a color changes", () => {
    expect(palette).toMatchSnapshot();
  });

  paletteColorsKeys.map((colorKey) =>
    describe(`Should get ${colorKey} colors`, () => {
      Object.keys(palette[colorKey]).map((variation) =>
        it(`Should get ${colorKey}.${variation}`, () => {
          // @ts-ignore
          expect(buildColor(colorKey, variation)).toBe(
            // @ts-ignore
            palette[colorKey][variation]
          );
        })
      );
    })
  );
});
