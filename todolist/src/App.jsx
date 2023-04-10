import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import apolloClient from "./config/apollo";
import store, { persiststore } from "./config/redux/store";
import RootRouter from "./RootRouter";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persiststore}>
          <RootRouter />
        </PersistGate>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
