import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { persiststore } from "../../config/redux/store";
import {
  useRetrieveUserLoadingSelector,
  useUserListSelector,
} from "../../config/redux/user/userSelector";
import { retrieveUser } from "../../config/redux/user/userThunk";
import "./User.style.css";

const User = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useRetrieveUserLoadingSelector();
  const users = useUserListSelector();

  const handleNavigate = useCallback(() => {
    navigate("/todo");
  }, []);

  useEffect(() => {
    dispatch(retrieveUser());
  }, []);

  return (
    <div className="User">
      <button
        onClick={() => {
          persiststore.purge();
        }}
      >
        purge
      </button>
      <div>User page</div>
      <button onClick={handleNavigate}>move to todo</button>
      {isLoading && <div>loading...</div>}
      {users.map((user, idx) => {
        return <div key={idx}>{user.name}</div>;
      })}
    </div>
  );
};

export default User;
