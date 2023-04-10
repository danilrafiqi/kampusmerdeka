import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useTokenSelector } from "../../config/redux/session/sessionSelector";
import { login } from "../../config/redux/session/sessionThunk";
import "./Login.style.css";

const schema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().required(),
});

const Login = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useTokenSelector();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });

  useEffect(() => {
    if (!!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  return (
    <div className="login">
      <div>Login page</div>

      <br />
      <div>
        {formik.errors.email && <div>{formik.errors.email}</div>}
        <input
          type="text"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Email..."
        />
      </div>
      <br />
      <div>
        {formik.errors.password && <div>{formik.errors.password}</div>}
        <input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder="Password..."
        />
      </div>
      <button onClick={formik.handleSubmit}>Login</button>
    </div>
  );
};

export default Login;
