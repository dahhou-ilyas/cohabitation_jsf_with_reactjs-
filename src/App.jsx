// App.js

import React, { useEffect, useState } from 'react';
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

  const [socket,setSocket]=useState();

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080/jsf2-1.0-SNAPSHOT/websocket');
    setSocket(ws)
    ws.onopen = () => {
      console.log('WebSocket connected');
    };

    ws.onmessage = (event) => {
      const receivedData = JSON.parse(event.data);
      setData(prevData => prevData.concat(receivedData));
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    ws.onclose = () => {
      console.log('WebSocket disconnected');
    };

    return () => {
      ws.close();
    };
  }, []);

  useEffect(() => {
    setItemCount(data.length);
  }, [data]);

  
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
              <Search socket={socket} dataFrom={data} setItemCount={setItemCount}/>
            </div>
          </div>
          <Footer />
        </>} />

        {/* Route spécifique pour Search sans Header, Footer ou Menu */}
        <Route path="/search-only" element={<Search socket={socket} dataFrom={data} setItemCount={setItemCount}/>} />
      </Routes>
    </Router>
  );
}

export default App;
