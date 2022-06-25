import { Provider as ReduxProvider} from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Router from "./helper/Router";
// import './App.css';


function App() {
  
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router/>
      </PersistGate>
    </ReduxProvider>
  );
}

export default App;
