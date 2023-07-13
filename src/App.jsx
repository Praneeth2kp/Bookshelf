import './App.css';
import Signup from './components/signup/signup';
import Login from './components/login/login';
import Home from './components/home/home';
import Nav from './components/navbar/navbar';
import Library from "./components/library/library";
import { BrowserRouter as Router, Routes, Route , Switch} from 'react-router-dom';
import CartPage from './components/cart/cartpage';

function App() {
  return (
    <div className='body1'>
      
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="/library" element={<Library />}></Route>
          <Route path="/cart" element={<CartPage  />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
