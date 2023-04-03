import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import InputTodo from "./InputTodo.molecule";
describe("InputTodo.molecule.jsx", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<InputTodo />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render correct value if isEdit false", () => {
    render(
      <InputTodo
        isEdit={false}
        onChange={vi.fn()}
        onSubmit={vi.fn()}
        onUpdate={vi.fn()}
        value="Halo dunia"
      />
    );

    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  it("should render correct value if isEdit true", () => {
    render(
      <InputTodo
        isEdit={true}
        onChange={vi.fn()}
        onSubmit={vi.fn()}
        onUpdate={vi.fn()}
        value="Halo dunia"
      />
    );

    expect(screen.getByText("Update")).toBeInTheDocument();
  });
});
