
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AddElement from "./components/AddElement";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Search from "./components/Search";


function App() {
  const [itemCount, setItemCount] = useState(0);
  const [data,setData]=useState({})

  return (
    <Router>
      <Header itemCount={itemCount} />
      <Menu />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddElement setItemCount={setItemCount} />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
