import React from 'react';
import {Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/layout';
import Home from './pages/home/home';
import MyPage from './pages/mypage/mypage';

function App() {
  return (
  <Layout>
    <Routes>
      <Route path="/" element= {<Home/>} />
      <Route path="/mypage" element={<MyPage/>} />
    </Routes>
  </Layout>
  );
}

export default App;
