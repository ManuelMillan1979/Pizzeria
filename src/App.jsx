import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import TarjetasPizzas from "./Pages/TarjetasPizzas.jsx";
import TarjetasEmpanadas from './Pages/TarjetasEmpanadas.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Tarjetaspizzas" element={<TarjetasPizzas />} />
        <Route path='/TarjetasEmpanadas' element={<TarjetasEmpanadas/>} />
      </Routes>
    </Router>
  );
}

export default App;

