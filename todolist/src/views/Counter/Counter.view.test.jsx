import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import store from "../../config/redux/store";
import Counter from "./Counter.view";

describe("Counter", () => {
  it("should render correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Counter />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
