import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/navbar";
import Login from "./Pages/login";
import Main from "./Pages/main";
import Properties from "./Pages/Properties";
import PropertyDetails from "./Pages/propertyDetails";
import Register from "./Pages/register";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/properties" element={<Properties />} />
        <Route
          path="/properties/:propertyId"
          element={<PropertyDetails />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
