import React from 'react';
import Link from 'next/link';
import Navigation from './Navigation';

const navItems = [
    {label: "home", href: '/'},
    {label: "Blog", href:"/blog"},
    {label: "About", href: "/about"},
]

const TheHeader = () => {
    return (
        <header>
            <Navigation navLinks={navItems}/>
        </header>
    );
};

export default TheHeader;