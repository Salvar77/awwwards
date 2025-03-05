import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Nexus from "./pages/nexus/Nexus";
import Vault from "./pages/vault/Vault";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nexus" element={<Nexus />} />
        <Route path="/vault" element={<Vault />} />
      </Routes>
    </>
  );
};

export default App;
