import React from 'react';
import { InputBase, IconButton, Button, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import '../../css/header.css';
import '../../css/font.css';

const Header = () => {
  return (
    <header>
      <div className='header-start'>
        <div className='logo'>
          PairPick
        </div>
        <nav>
          <a href="/" className='menu'>홈</a>
          <a href="/mypage" className='menu'>마이페이지</a>
        </nav>
      </div>
      <div className='header-end'>
        <Paper 
          component="form"
          sx={{ 
            p: '2px 4px', 
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'space-between', 
            width: '60%',
            height: '70%',
            borderRadius: '10px',
            backgroundColor: 'rgba(233, 236, 239, 0.5)',
            paddingLeft: '10px',
            marginRight: '10px'
          }}
          elevation={0}
          >
          <InputBase
            placeholder="극 제목을 검색해보세요."
            
            inputProps={{ 'aria-label': 'search' }}
            sx ={{
              padding: '0px',
              fontSize: '1rem',
              fontFamily: 'Pretendard',
              color: '#202123',
            }}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        <Button 
          variant="outlined" 
          sx={{
            color: '#202123',
            borderColor: '#B8B8B8',
            fontFamily: 'Pretendard',
            fontSize: '1rem',
            borderRadius: '10px',
            padding: '5px 10px',
            height: '70%',
          }}>
          로그인
        </Button>
      </div>
    </header>
  );
}

export default Header;