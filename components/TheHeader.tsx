import React from 'react';
import Link from 'next/link';
const TheHeader = () => {
    return (
        <header>
            <Link href={"/"}>Home</Link>
            <Link href={"/blog"}>blog</Link>
            <Link href={"/about"}>about</Link>
        </header>
    );
};

export default TheHeader;