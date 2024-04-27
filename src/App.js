import "./App.css";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import Fixtures from "./Views/Fixtures";
import Teams from "./Views/Teams";
import Table from "./Views/Table";
import News from "./Views/News";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fixtures" element={<Fixtures />} />
        <Route path="/sports" element={<Teams />} />
        <Route path="/table" element={<Table />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
