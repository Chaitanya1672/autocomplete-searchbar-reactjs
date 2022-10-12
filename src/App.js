import "./App.css";
import { useGolbalContext } from "./components/context";
import SearchBar from "./components/SearchBar";

function App() {
  const data = useGolbalContext();
  return (
    <div className="App">
      <div>{data}</div>
      <SearchBar />
    </div>
  );
}

export default App;
