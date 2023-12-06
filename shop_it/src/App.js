import logo from './logo.svg';
import './App.css';
import Login from './Authentication/Login';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Login/>
    <Footer/>
    </div>
  );
}

export default App;
