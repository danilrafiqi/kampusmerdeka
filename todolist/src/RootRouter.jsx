import { BrowserRouter, Route, Routes } from "react-router-dom";
import router from "./config/router";

function RootRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {router.map((route, index) => {
          return (
            <Route path={route.path} element={route.element} key={index} />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default RootRouter;
