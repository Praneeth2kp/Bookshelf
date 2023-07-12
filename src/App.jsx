import './App.css';
import Signup from './components/signup/signup';
import Login from './components/login/login';
import Home from './components/home/home';
import Nav from './components/navbar/navbar';
import Library from "./components/library/library";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="/navbar" element={<Nav />}></Route>
          <Route path="/library" element={<Library />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
