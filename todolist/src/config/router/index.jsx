import Counter from "../../views/Counter/Counter.view";
import CreateProduct from "../../views/CreateProduct/CreateProduct.view";
import Landing from "../../views/Landing/Landing.view";
import Login from "../../views/Login/Login";
import Product from "../../views/Product/Product.view";
import ProductDetail from "../../views/ProductDetail/ProductDetail.view";
import TodoList from "../../views/TodoList/TodoList.view";

const router = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/todo",
    element: <TodoList />,
  },
  {
    path: "/product/create",
    element: <CreateProduct />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/product/:id",
    element: <ProductDetail />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
];

export default router;
