import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Columns from "./components/Columns.jsx";
import SimpleSteps from "./components/SimpleSteps.jsx";
function App() {

  return (
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<Home />} />
          </Routes>
          <Columns/>
          <SimpleSteps/>
      </BrowserRouter>
  );
}
export default App;
