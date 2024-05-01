
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
  const [data,setData]=useState([])

  return (
    <Router>
      <Header itemCount={itemCount} />
      <div class="separe-content">
        <Menu />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddElement setData={setData} setItemCount={setItemCount} />} />
            <Route path="/search" element={<Search data={data}/>} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
