import Input from "..";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import userEvent from "@testing-library/user-event";

describe("Input component renering and behavior", () => {
  const error = {
    message: "error",
  };

  it("should render <Input/> correctly", () => {
    const tree = renderer
      .create(
        <Input type="text" label="Text Input" placeholder="write something" />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render <Input/> with error", () => {
    const tree = renderer
      .create(
        <Input
          type="text"
          label="Text Input Error"
          placeholder="write something"
          error={error}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("<Input/> should display correct text when typed into", () => {
    render(
      <Input
        type="text"
        label="Text Input Typed"
        placeholder="write something"
        error={error}
      />
    );
    userEvent.type(screen.getByRole("textbox"), "Hello, World!");
    expect(screen.getByRole("textbox")).toHaveValue("Hello, World!");
  });
});
