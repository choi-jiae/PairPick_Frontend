import React from 'react';
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
        </div>
    )
}

export default Layout;
