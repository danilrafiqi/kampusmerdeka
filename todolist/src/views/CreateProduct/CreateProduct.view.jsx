import { useFormik } from "formik";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateProduct.style.css";

import * as Yup from "yup";

const MAX_FILE_SIZE = 1024; //100KB

const schema = Yup.object().shape({
  number: Yup.number().min(2).max(50).required(),
  email: Yup.string().matches(
    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    "please input valid email"
  ),
  fileUpload: Yup.mixed()
    .required()
    .test(
      "size",
      "Max allowed size is 10KB",
      (value) => value && value.size <= MAX_FILE_SIZE
    )
    .test(
      "type",
      "error type image",
      (value) => value && value.type === "image/png"
    ),
});

const CreateProduct = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      size: "S",
      number: 0,
      email: "",
      password: "",
      fileUpload: {},
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log("cek values", values);
    },
  });

  const handleNavigate = useCallback(() => {
    navigate("/todo");
  }, []);
  console.log("formik.values", formik.values);
  console.log("formik.errors", formik.errors);
  return (
    <div className="create-product">
      <div>CreateProduct page</div>

      <input
        type="file"
        name="uploadFile"
        id=""
        onChange={(e) => {
          console.log("e.target.value", e.target.value);
          console.log("e.target.files[0]", e.target.files[0]);
          formik.setFieldValue("fileUpload", e.target.files[0]);
        }}
      />
      <br />
      <br />

      <div>{formik.values.number}</div>
      <div>
        {formik.errors.number && <div>{formik.errors.number}</div>}
        <input
          type="number"
          id=""
          name="number"
          value={formik.values.number}
          onChange={formik.handleChange}
        />
      </div>

      <br />
      <br />
      <div>{formik.values.size}</div>
      <div>
        <div>
          <input
            type="radio"
            id="s"
            name="size"
            checked={"S" === formik.values.size}
            value={"S"}
            onChange={formik.handleChange}
          />
          <label htmlFor="S">S</label>
        </div>

        <div>
          <input
            type="radio"
            id="l"
            name="size"
            checked={"L" === formik.values.size}
            value={"L"}
            onChange={formik.handleChange}
          />
          <label htmlFor="l">L</label>
        </div>

        <div>
          <input
            type="radio"
            id="xl"
            name="size"
            checked={"XL" === formik.values.size}
            value={"XL"}
            onChange={formik.handleChange}
          />
          <label htmlFor="xl">XL</label>
        </div>
      </div>
      <br />
      <br />

      <div>
        {formik.errors.email && <div>{formik.errors.email}</div>}
        <input
          type="text"
          id=""
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </div>

      <br />
      <br />

      <div>
        <input
          type="text"
          id=""
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
      </div>

      <br />
      <br />

      <button onClick={formik.handleSubmit}>submit data</button>

      <button onClick={handleNavigate}>move to todo</button>
    </div>
  );
};

export default CreateProduct;

// routing x
// radio x
// decimal x
// 2 decimal after comma x
// local storage
