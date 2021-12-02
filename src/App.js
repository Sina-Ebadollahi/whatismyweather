// style
import "./App.css";
// routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages
import Home from "./Pages/Home/Home";
import Weather from "./Pages/Weather/Weather";
import Detail from "./Pages/Detail/Detail";
// components
import NavBar from "./Components/NavBar/NavBar";
import NotFound from "./Pages/NotFound/NotFound";
// transitions
import Zoom from "react-reveal/Fade";
function App() {
  return (
    <div className="App">
      <Router>
        <Zoom bottom>
          <NavBar />
        </Zoom>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:city" element={<Detail />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
