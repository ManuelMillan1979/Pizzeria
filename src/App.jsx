import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import TarjetasPizzas from "./Pages/TarjetasPizzas.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Tarjetaspizzas" element={<TarjetasPizzas />} />
      </Routes>
    </Router>
  );
}

export default App;

