import './App.css';
import Footer from './components/Footer';
import { Homepage } from './components/Homepage';
import { Navbar } from './components/Navbar';
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <>
    <Navbar />
    <Homepage />
    <Footer />
    </>
  );
}

export default App;
