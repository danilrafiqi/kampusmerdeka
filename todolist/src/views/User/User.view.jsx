import { gql, useQuery } from "@apollo/client";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./User.style.css";

const RETRIEVE_USERS_QUERY = gql`
  query RETRIEVE_USERS_QUERY {
    users {
      id
      name
    }
  }
`;

const User = () => {
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(RETRIEVE_USERS_QUERY);

  const handleNavigate = useCallback(() => {
    navigate("/todo");
  }, []);

  return (
    <div className="User">
      <div>User page</div>
      <button onClick={handleNavigate}>move to todo</button>
      {error && <div>some error</div>}
      {loading && <div>loading...</div>}
      {data?.users.map((user, idx) => {
        return <div key={idx}>{user.name}</div>;
      })}
    </div>
  );
};

export default User;
