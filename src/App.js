import { Provider } from "react-redux";
import "./App.css";
import reduxStore from "./Utils/reduxStore";
import MainContainer from "./Components/MainContainer";

function App() {
  return (
    <div className="App text-white">
      <Provider store={reduxStore}>
        <MainContainer />
      </Provider>
    </div>
  );
}

export default App;
