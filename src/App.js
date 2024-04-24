import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'react-loading-skeleton/dist/skeleton.css'

import Footer from './components/Footer';
import { Homepage } from './components/Homepage';
import { Navbar } from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
// import Register from './components/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'
import { useContext, useEffect, useState } from 'react';
import CreatePost from './components/CreatePost';
import CardDetails from './components/CardDetails';
import CardEdit from './components/CardEdit';
import Page404 from './components/Page404';
import { SERVER_URL } from './environment';
import { UserContext } from './UserContext';
import CreateBlog from './components/blogs/CreateBlog';
import BlogDetails from './components/blogs/BlogDetails';
import BlogEdit from './components/blogs/BlogEdit';

function App() {
  //react hooks
  const [progress, setProgress] = useState(0)
  const {userInfo, setUserInfo} = useContext(UserContext)

  useEffect(() => {
    fetch(`${SERVER_URL}/api/auth/profile`, {
      credentials: 'include'

    }).then(response => {
      response.json().then(info => {
        setUserInfo(info);
      }).catch(()=>{
        console.log("Please login to create posts");
      })
    }).catch(() => {
      console.log("Please login to create posts");
    })


  }, [setUserInfo]);

  return (
    <>
      <ToastContainer />
      <LoadingBar color='black' shadow="true" height={4} loaderSpeed={1000} progress={progress} onLoaderFinished={() => setProgress(progress)} />
      <Navbar setProgress={setProgress} />
      <Routes>
        <Route path='/' element={<Homepage setProgress={setProgress} />} />
        <Route path='/login' element={<Login setProgress={setProgress} />} />
        {/* <Route path='/register' element={<Register setProgress={setProgress} />} /> */}
        <Route path='/createllm' element={userInfo?.username ? <CreatePost /> : <Homepage />} />
        <Route path='/createblog' element={userInfo?.username ? <CreateBlog /> : <Homepage />} />
        <Route path='/card/:id' element={<CardDetails />} />
        <Route path='/blogpost/:id' element={<BlogDetails />} />
        <Route path='/edit/:id' element={<CardEdit />} />
        <Route path='/blogedit/:id' element={<BlogEdit />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
