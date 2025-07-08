import './App.css';
import React, { useState } from 'react';
import Navbar from './component/Navbar';
import News from './component/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 5;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router basename="/NewsMonkey">
        <Navbar />
        <LoadingBar
          height={3}
          color="#f11946"
          progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key="sports-home" pagesize={pageSize} country="us" category="sports" />} />
          <Route exact path="/NewsMonkey" element={<News setProgress={setProgress} key="technology-home" pagesize={pageSize} country="us" category="technology" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pagesize={pageSize} country="us" category="entertainment" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} key="business" pagesize={pageSize} country="us" category="business" />} />
          <Route exact path="/general" element={<News setProgress={setProgress} key="general" pagesize={pageSize} country="us" category="general" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} key="health" pagesize={pageSize} country="us" category="health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} key="science" pagesize={pageSize} country="us" category="science" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pagesize={pageSize} country="us" category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pagesize={pageSize} country="us" category="technology" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
