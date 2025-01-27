import React from 'react';
import Footer from './footer';
import Header from './header';

const Layout = (props: {
    children: React.ReactNode;
}) => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                {props.children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout;
