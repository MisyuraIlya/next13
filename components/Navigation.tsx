'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC } from 'react';
import { useSession, signOut } from 'next-auth/react'

type NavLink = {
    label: string;
    href: string;
}

type props = {
    navLinks: NavLink[];
}
const Navigation:FC<props> = ({navLinks}) => {
    const pathname = usePathname();
    const session = useSession()
    console.log('session',session)
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
            {session?.data && (
                <Link href={"/profile"}>Profile</Link>
            )}
            {/* {session?.data ? <Link href={"#"} onClick={() => signOut({callbackUrl: '/'})}>Sign out</Link> : <Link href={"/api/auth/signin"}>SignIn</Link>} // sign in with google default UI*/}
            {session?.data ? <Link href={"#"} onClick={() => signOut({callbackUrl: '/'})}>Sign out</Link> : <Link href={"/signin"}>SignIn</Link>} 
        </>
    );
};

export default Navigation;