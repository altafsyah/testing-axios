import { Route, Routes } from "react-router-dom";
import "./App.css";
import DisplayCar from "./components/DisplayCar";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Routes>
      <Route index element={<DisplayCar />}></Route>
      <Route path="search" element={<SearchPage />}></Route>
    </Routes>
  );
}

export default App;
