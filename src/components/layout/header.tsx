import React from 'react';
import { InputBase, IconButton, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import '../../css/header.css';

const Header = () => {
  return (
    <header className="header">
        <div className='logo'>
          PairPick
        </div>
        <nav>
          <a href="/" className='menu'>홈</a>
          <a href="/mypage" className='menu'>마이페이지</a>
        </nav>
        <InputBase
          placeholder="극 제목을 검색해보세요."
          inputProps={{ 'aria-label': 'search' }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Button variant="contained" color="primary">
          로그인
        </Button>
    </header>
  );
}

export default Header;