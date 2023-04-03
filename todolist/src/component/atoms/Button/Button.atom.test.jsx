import { fireEvent, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Button from "./Button.atom";

describe("Button", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<Button>tombol</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render children correctly", () => {
    render(<Button>tombol</Button>);
    expect(screen.getByText("tombol")).toBeInTheDocument();
  });

  it("should be able to fire onClick event", () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>tombol</Button>);
    fireEvent.click(screen.getByText("tombol"));
    expect(onClick).toHaveBeenCalled();
  });
});
