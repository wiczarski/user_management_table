import {Provider} from "react-redux";
import store from "./store/reducer/reducer-index";
import Table from "./components/Table/Table/Table";
import Title from "./components/Title/Title";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Title />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
