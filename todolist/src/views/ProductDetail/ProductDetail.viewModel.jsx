import { useFormik } from "formik";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import {
  useProductDetailSelector,
  useProductTypeSelector,
} from "../../config/redux/product/productSelector";
import {
  retrieveProductById,
  updateProductById,
} from "../../config/redux/product/productThunk";

const schema = Yup.object().shape({
  price: Yup.number().required(),
  name: Yup.string().required(),
});

const useProductDetailViewModel = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const productDetail = useProductDetailSelector();
  const productType = useProductTypeSelector();

  //#region HANDLER
  const handleNavigate = useCallback(() => {
    navigate("/todo");
  }, []);

  const handleUpdateProductById = useCallback((values) => {
    dispatch(updateProductById({ ...values, id: params.id }));
  });

  //#endregion

  //#region FORM
  const formik = useFormik({
    initialValues: {
      name: productDetail.name || "",
      price: productDetail.price || 0,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      handleUpdateProductById(values);
    },
    enableReinitialize: true,
  });
  //#endregion

  //#region EFFECT
  useEffect(() => {
    dispatch(retrieveProductById({ id: params.id }));
  }, [params]);
  //#endregion

  //#region WATCHER
  useEffect(() => {
    if (productType === updateProductById.fulfilled.type) {
      navigate(-1);
    }
  }, [productType, navigate]);
  //#endregion

  return { handleNavigate, params, formik };
};

export default useProductDetailViewModel;
