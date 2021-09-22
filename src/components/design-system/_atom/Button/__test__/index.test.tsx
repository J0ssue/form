import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Button from "..";
import userEvent from "@testing-library/user-event";

describe("<Button/> renders correctly", () => {
  const buttonClickHandler = jest.fn();

  it("should render <Button/> with default params", () => {
    const tree = renderer
      .create(<Button onClickHandler={buttonClickHandler} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render <Button/> with custom params", () => {
    const tree = renderer
      .create(
        <Button
          label="my button"
          buttonType="primary"
          onClickHandler={buttonClickHandler}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should run click handler when clicked", () => {
    render(<Button label="click button" onClickHandler={buttonClickHandler} />);

    userEvent.click(screen.getByText("click button"));

    expect(buttonClickHandler).toHaveBeenCalledTimes(1);
  });
});
