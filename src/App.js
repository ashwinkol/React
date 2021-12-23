import './App.css';
import Home from './components/Home';
import TopNav from './components/TopNav';
import Footer from './components/Footer';
import Slids from './components/Slids';
import { BrowserRouter, Routes, Route, Link, Router } from 'react-router-dom'
import Team from './components/Team';

function App() {
  return (
    <div className="App">

      <TopNav />
      <Home />
      <Team/>
      <Footer />
    </div>
  );
}

export default App;
