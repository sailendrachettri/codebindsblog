import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import Footer from './components/Footer';
import { Homepage } from './components/Homepage';
import { Navbar } from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer />
    <Navbar />
      <Routes>
        <Route  path='/login' element={<Login />} />
        <Route  path='/register' element={<Register />} />
        <Route  path='/' element={<Homepage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
