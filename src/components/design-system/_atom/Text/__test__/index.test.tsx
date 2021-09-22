// import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Text from "..";

describe("<Text/> rendering", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<Text text="hello world" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
