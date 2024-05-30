// App.js

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
  const [data, setData] = useState([]);
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>
          <Header itemCount={itemCount} />
          <div className="separe-content">
            <Menu />
            <div className="main-content">
              <Home />
            </div>
          </div>
          <Footer />
        </>} />
        <Route path="/add" element={<>
          <Header itemCount={itemCount} />
          <div className="separe-content">
            <Menu />
            <div className="main-content">
              <AddElement setData={setData} setItemCount={setItemCount} />
            </div>
          </div>
          <Footer />
        </>} />
        <Route path="/add-element" element={<AddElement setData={setData} setItemCount={setItemCount} />} />
        <Route path="/search" element={<>
          <Header itemCount={itemCount} />
          <div className="separe-content">
            <Menu />
            <div className="main-content">
              <Search dataFrom={data} />
            </div>
          </div>
          <Footer />
        </>} />

        {/* Route spécifique pour Search sans Header, Footer ou Menu */}
        <Route path="/search-only" element={<Search dataFrom={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
