import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import TarjetasPizzas from "./Pages/TarjetasPizzas.jsx";
import TarjetasEmpanadas from './Pages/TarjetasEmpanadas.jsx';
import TarjetasBebidas from './Pages/TarjetasBebidas.jsx';
import EmpanadaCarne100 from './Pages/TarjetasEmpanadas/EmpanadaCarne100.jsx';
import EmpanadaCalabaza from './Pages/TarjetasEmpanadas/EmpanadaCalabaza.jsx';
import EmpanadaPorkAgri from './Pages/TarjetasEmpanadas/EmpanadaPorkAgri.jsx';
import EmpanadaFullPanceta from './Pages/TarjetasEmpanadas/EmpanadaFullPanceta.jsx';
import NotFound from './Pages/404NotFound.jsx'; // Create a NotFound component
import EmpanadaPolloBBQ from './Pages/TarjetasEmpanadas/EmpanadaPolloBBQ.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tarjetasPizzas" element={<TarjetasPizzas />} />
        <Route path="/tarjetasEmpanadas" element={<TarjetasEmpanadas />} />
        <Route path="/tarjetasBebidas" element={<TarjetasBebidas />} />
        <Route path="/empanadaCarne100" element={<EmpanadaCarne100 />} />
        <Route path="/empanadaCalabaza" element={<EmpanadaCalabaza />} />
        <Route path="/empanadaPorkAgri" element={<EmpanadaPorkAgri />} />
        <Route path="/empanadaFullPanceta" element={<EmpanadaFullPanceta />} />
        <Route path='/empanadaPolloBBQ' element={<EmpanadaPolloBBQ />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
