import React from "react";
import Header from "./components/header.jsx";
import './App.module.css'
import Login from './components/login.jsx'
import Footer from './components/footer.jsx'



function App() { 
  return (
    <div className="App">
      <Header />
      <Login />
      <Footer />
      
    </div>
  );
}

export default App;
