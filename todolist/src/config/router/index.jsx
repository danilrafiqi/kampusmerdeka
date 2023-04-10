import Counter from "../../views/Counter/Counter.view";
import CreateProduct from "../../views/CreateProduct/CreateProduct.view";
import Landing from "../../views/Landing/Landing.view";
import Login from "../../views/Login/Login.view";
import Product from "../../views/Product/Product.view";
import ProductDetail from "../../views/ProductDetail/ProductDetail.view";
import Report from "../../views/Report/Report.view";
import TodoList from "../../views/TodoList/TodoList.view";
import User from "../../views/User/User.view";

const router = [
  {
    path: "/",
    element: <Landing />,
    isPrivate: true,
  },
  {
    path: "/todo",
    element: <TodoList />,
    isPrivate: true,
  },
  {
    path: "/product/create",
    element: <CreateProduct />,
    isPrivate: true,
  },
  {
    path: "/login",
    element: <Login />,
    isPrivate: false,
  },
  {
    path: "/product",
    element: <Product />,
    isPrivate: true,
  },
  {
    path: "/product/:id",
    element: <ProductDetail />,
    isPrivate: true,
  },
  {
    path: "/counter",
    element: <Counter />,
    isPrivate: true,
  },
  {
    path: "/user",
    element: <User />,
    isPrivate: true,
  },
  {
    path: "/report",
    element: <Report />,
    isPrivate: true,
  },
];

export default router;
