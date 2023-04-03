import axios from "axios";
import store from "../store";
import mockData from "./data.mock";
import { retrieveUser } from "./userThunk";

describe("test", () => {
  it("shoud be run correctly", async () => {
    const postSpy = vi
      .spyOn(axios, "get")
      .mockResolvedValueOnce({ data: mockData });

    await store.dispatch(retrieveUser());

    expect(postSpy).toBeCalledWith(
      "https://jsonplaceholder.typicode.com/users"
    );
    const state = store.getState();
    expect(state.user.users).toEqual(mockData);
  });
});
