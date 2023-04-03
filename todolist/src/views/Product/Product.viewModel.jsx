import { useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";
import { useProductsSelector } from "../../config/redux/product/productSelector";
import {
  createProduct,
  retrieveProducts,
} from "../../config/redux/product/productThunk";

const schema = Yup.object().shape({
  price: Yup.number().required(),
  name: Yup.string().required(),
});

const useProductViewModel = () => {
  const products = useProductsSelector();
  const dispatch = useDispatch();

  //#region FORM
  const formik = useFormik({
    initialValues: {
      name: "",
      price: 0,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(
        createProduct({
          ...values,
          id: uuidv4(),
        })
      );
    },
  });
  //#endregion

  //#region EFFECT
  useEffect(() => {
    dispatch(retrieveProducts());
  }, []);
  //#endregion
  return { products, formik };
};

export default useProductViewModel;
