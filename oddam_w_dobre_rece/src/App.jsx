import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Columns from "./components/Columns.jsx";
import SimpleSteps from "./components/SimpleSteps.jsx";
import About from "./components/About.jsx";
import supabase from '../src/config/supabaseClient.js';
import WhoWeHelp from "./components/WhoWeHelp.jsx";
function App() {
console.log(supabase)
  return (
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<Home />} />
          </Routes>
      </BrowserRouter>
  );
}
export default App;
