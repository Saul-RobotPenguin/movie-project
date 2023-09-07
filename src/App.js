import "./App.css";
import { Route, Routes } from "react-router";
import HomePage from "./components/Homepage/HomePage";
import SearchPage from "./components/SearchPage/SearchPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
