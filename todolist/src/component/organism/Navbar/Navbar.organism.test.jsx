import renderer from "react-test-renderer";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
