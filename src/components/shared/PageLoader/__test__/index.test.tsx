import renderer from "react-test-renderer";
import PageLoader from "components/shared/PageLoader";

test("should show loading screen", () => {
  const tree = renderer.create(<PageLoader />).toJSON();
  expect(tree).toMatchSnapshot();
});
