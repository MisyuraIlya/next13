'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC } from 'react';


type NavLink = {
    label: string;
    href: string;
}

type props = {
    navLinks: NavLink[];
}
const Navigation:FC<props> = ({navLinks}) => {
    const pathname = usePathname();
    return (
        <>
            {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                    <Link key={link.label} href={link.href} className={isActive ? 'active' : ''}>
                        {link.label}
                    </Link>
                )
            })}   
        </>
    );
};

export default Navigation;