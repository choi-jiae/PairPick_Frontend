import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import '../../css/footer.css';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Footer = () => {
    return (
        <footer className="bottom-nav">
            <BottomNavigation
                showLabels
                sx={{
                    width: '97%',
                    position: 'fixed',
                    bottom: 0,
                    backgroundColor: '#FDFDFD',
                }}    
            >
                <BottomNavigationAction 
                    label="홈" 
                    value="home" 
                    icon={<HomeIcon />}
                    sx={{
                        color: '#9F9F9F',
                        fontSize: '0.8rem',
                        fontFamily: 'Pretendard-Regular'
                    }}
                />
                <BottomNavigationAction 
                    label="검색" 
                    value="search"
                    icon={<SearchIcon />}
                    sx={{
                        color: '#9F9F9F',
                        fontSize: '0.8rem',
                        fontFamily: 'Pretendard-Regular'
                    }}
                />
                <BottomNavigationAction 
                    label="마이페이지" 
                    value="mypage"
                    icon={<AccountCircleIcon />}
                    sx={{
                        color: '#9F9F9F',
                        fontSize: '0.8rem',
                        fontFamily: 'Pretendard-Regular'
                    }}
                />
            </BottomNavigation>
        </footer>
    )
}

export default Footer;