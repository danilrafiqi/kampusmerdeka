import { useFormik } from "formik";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";
import {
  useProductsSelector,
  useProductTypeSelector,
} from "../../config/redux/product/productSelector";
import {
  createProduct,
  deleteProductById,
  retrieveProducts,
  updateProductById,
} from "../../config/redux/product/productThunk";

const schema = Yup.object().shape({
  price: Yup.number().required(),
  name: Yup.string().required(),
});

const useProductViewModel = () => {
  const products = useProductsSelector();
  const productType = useProductTypeSelector();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //#region HANDLER
  const handleDeleteProductById = useCallback(
    (id) => {
      dispatch(deleteProductById({ id }));
    },
    [dispatch]
  );

  // const handleCreateProduct = useCallback(
  //   (param) => {
  //     dispatch(createProduct({ ...param, id: uuidv4() }));
  //   },
  //   [dispatch]
  // );

  const handleNavigateDetail = useCallback(
    (id) => {
      navigate(`/product/${id}`);
    },
    [dispatch]
  );

  // const handleUpdateProductById = useCallback(
  //   (param) => {
  //     dispatch(updateProductById(param));
  //   },
  //   [dispatch]
  // );

  //#endregion

  //#region FORM
  const formik = useFormik({
    initialValues: {
      name: "",
      price: 0,
      id: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (values.id !== "") {
        dispatch(updateProductById(values));
        // handleUpdateProductById(values);
      } else {
        // handleCreateProduct(values);
        dispatch(createProduct({ ...values, id: uuidv4() }));
      }
      formik.resetForm();
    },
  });
  //#endregion

  const handleEditProductById = useCallback((param) => {
    formik.setValues(param);
  });

  //#region EFFECT
  useEffect(() => {
    dispatch(retrieveProducts());
  }, []);
  //#endregion

  // #region WATCHER
  useEffect(() => {
    if (productType === createProduct.fulfilled.type) {
      dispatch(retrieveProducts());
      // show message
    }
    if (productType === deleteProductById.fulfilled.type) {
      dispatch(retrieveProducts());
      // show message
    }
    if (productType === updateProductById.fulfilled.type) {
      dispatch(retrieveProducts());
    }
  }, [productType]);
  //#endregion

  return {
    products,
    formik,
    handleDeleteProductById,
    handleNavigateDetail,
    handleEditProductById,
  };
};

export default useProductViewModel;
