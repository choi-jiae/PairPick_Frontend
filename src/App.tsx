import React from 'react';
import {Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/layout';

function App() {
  return (
  <Layout>
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/mypage" element={<h1>About</h1>} />
    </Routes>
  </Layout>
  );
}

export default App;
