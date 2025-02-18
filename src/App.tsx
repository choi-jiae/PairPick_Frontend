import React from 'react';
import {Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/layout';
import Home from './pages/home/home';
import MyPage from './pages/mypage/mypage';
import PlayReview from './pages/play/playReview';

function App() {
  return (
  <Layout>
    <Routes>
      <Route path="/" element= {<Home/>} />
      <Route path="/mypage" element={<MyPage/>} />
      <Route path="/play/:id" element={<PlayReview/>} />
    </Routes>
  </Layout>
  );
}

export default App;
