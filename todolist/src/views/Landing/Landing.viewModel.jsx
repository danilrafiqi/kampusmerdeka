import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const useLandingViewModel = () => {
  const navigate = useNavigate();

  const handleNavigateTodo = useCallback(() => {
    navigate("/todo");
  }, []);

  const handleNavigateCreateProduct = useCallback(() => {
    navigate("/product/create");
  }, []);

  const handleNavigateProduct = useCallback(() => {
    navigate("/product");
  }, []);

  const handleNavigateProductDetail = useCallback((id) => {
    navigate(`/product/${id}`);
  }, []);

  const handleNavigateToDashboard = useCallback(() => {
    navigate(`/dashboard`);
  }, []);

  return {
    handleNavigateTodo,
    handleNavigateCreateProduct,
    handleNavigateProduct,
    handleNavigateProductDetail,
    handleNavigateToDashboard,
  };
};

export default useLandingViewModel;
