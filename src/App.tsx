import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import { PlacesMap, CrimeMap } from "@/components";
import { Home, MapPage } from "@/routes";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places" element={<MapPage component={PlacesMap} title="Places"/>} />
        <Route path="/crime" element={<MapPage component={CrimeMap} title="EU - Homicide statistics, 2021"/>} />
      </Routes>
    </Router>
  );
};

export default App;
