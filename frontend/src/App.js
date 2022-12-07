import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Main from './Pages/main';
import Property from './Pages/properties';
import PropertyDetails from './Pages/propertyDetails';
import Login from './Pages/login';
import Register from './Pages/register';
import Navbar from './Components/navbar';


function App() {
  return (
<Router>
  <Navbar />
  <Routes>
    <Route path='/' element={<Main />}/>
    <Route path='/properties' element={<Property />}/>
    <Route path='/properties/:propertyId' element={<PropertyDetails />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/register' element={<Register />}/>
  </Routes>
</Router>

  )

  }

export default App;
