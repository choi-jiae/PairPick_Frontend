import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import '../../css/footer.css';

const Footer = () => {
    return (
        <footer className="bottom-nav">
            <BottomNavigation
                showLabels
                sx={{
                    width: '100%',
                    position: 'fixed',
                    bottom: 0,
                    backgroundColor: '#FDFDFD',
                }}    
            >
                <BottomNavigationAction label="Home" value="home" />
                <BottomNavigationAction label="Search" value="search" />
                <BottomNavigationAction label="MyPage" value="mypage" />
            </BottomNavigation>
        </footer>
    )
}

export default Footer;