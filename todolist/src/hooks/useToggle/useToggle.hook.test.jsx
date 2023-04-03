import { act, renderHook } from "@testing-library/react";
import useToggle from "./useToggle";

describe("useToogle", () => {
  it("should be defined", () => {
    expect(useToggle).toBeDefined();
  });

  it("should be able to toggle", () => {
    const { result } = renderHook(() => useToggle());

    expect(result.current.isShow).toBe(false);
    act(() => {
      result.current.toggleShow();
    });
    expect(result.current.isShow).toBe(true);
    act(() => {
      result.current.toggleShow();
    });
    expect(result.current.isShow).toBe(false);
  });
});
