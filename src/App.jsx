import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutesDos from "./routes/RoutesDos";
import Weddings from "../src/pages/Weddings";
import Register from "../src/pages/Register";
import Fifteen from "../src/pages/Fifteen";
import Family from "../src/pages/Family";
import Concerts from "../src/pages/Concerts";
import Advertising from "./pages/Advertising";
import Login from "./pages/Login";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<RoutesDos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/weddings" element={<Weddings />} />
        <Route path="/fifteen" element={<Fifteen />} />
        <Route path="/family" element={<Family />} />
        <Route path="/concerts" element={<Concerts />} />
        <Route path="/advertising" element={<Advertising />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
