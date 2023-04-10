import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./component/molecules";
import { useTokenSelector } from "./config/redux/session/sessionSelector";
import router from "./config/router";

function RootRouter() {
  const token = useTokenSelector();
  return (
    <BrowserRouter>
      <Routes>
        {router.map((route, index) => {
          if (route.isPrivate) {
            return (
              <Route
                path={route.path}
                element={
                  <PrivateRoute isAuthenticated={!!token}>
                    {route.element}
                  </PrivateRoute>
                }
                key={index}
              />
            );
          }
          return (
            <Route path={route.path} element={route.element} key={index} />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default RootRouter;
