import { initialState, todoAction, todoReducer } from "./todoSlice";

describe("todoSlice", () => {
  it("should have correct initial state", () => {
    expect(todoReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it("should have correct initial state", () => {
    expect(initialState).toEqual({
      todoList: [],
      todoSelected: 10,
      completedTodoList: [],
    });
  });

  it("should have action todoListUpdate correctly", () => {
    expect(
      todoReducer(initialState, todoAction.todoListUpdate(["baru"]))
    ).toEqual({
      ...initialState,
      todoList: ["baru"],
    });
  });
});
