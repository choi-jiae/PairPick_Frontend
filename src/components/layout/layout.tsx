import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = (props: {
    children: React.ReactNode;
}) => {
    return (
        <div>
            <Header />
            <main className='main-content'>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;
