import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persiststore } from "./config/redux/store";
import RootRouter from "./RootRouter";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persiststore}>
        <RootRouter />
      </PersistGate>
    </Provider>
  );
}

export default App;
