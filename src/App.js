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
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';
import CreatePost from './components/CreatePost';

function App() {
  //react hooks
  const [progress, setProgress] = useState(0)

  return (
    <>
      <ToastContainer />
      <LoadingBar color='black' shadow="true" height={4} loaderSpeed={1000} progress={progress} onLoaderFinished={() => setProgress(progress)} />
      <Navbar setProgress={setProgress} />
        <Routes>
          <Route path='/login' element={<Login setProgress={setProgress} />} />
          <Route path='/register' element={<Register setProgress={setProgress} />} />
          <Route path='/create' element={<CreatePost     />} />
          <Route path='/' element={<Homepage setProgress={setProgress} />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
