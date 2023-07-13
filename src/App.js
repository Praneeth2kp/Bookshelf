import './App.css';
import Signup from './components/signup/signup';
import Login from './components/login/login';
import Library from "./components/library/library";
import { BrowserRouter as Router, Routes, Route , Switch} from 'react-router-dom';
import CartPage from './components/cart/cartpage';

function App() {
  return (
    <div className='body1'>
      
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
        
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/library" element={<Library />}></Route>
          <Route path="/cart" element={<CartPage  />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
