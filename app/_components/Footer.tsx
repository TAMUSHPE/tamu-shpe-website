import React from 'react';
import Link from 'next/link';

export default function Footer() {
    const links = [
        {path: 'https://www.facebook.com/tamushpe5/', label: 'Facebook'},
        {path: 'https://x.com/tamushpe?lang=en', label: 'X'},
        {path: 'https://www.instagram.com/tamushpe/?hl=en', label: 'Instagram'},
        {path: 'https://www.snapchat.com/add/tamushpe', label: 'Snapchat'},
        {path: 'https://www.youtube.com/channel/UCebsLGRRglWj459ueGDTzug', label: 'Youtube'},
        {path: 'https://www.linkedin.com/company/tamushpe/', label: 'LinkedIn'},
        {path: 'https://www.flickr.com/photos/143848472@N03/', label: 'Flickr'},
    ]
    return (
        <footer className="flex items-center justify-between h-28 w-full p-4 shadow-md bg-[#191740] text-white">
            <div className="flex items-center pr-8 shrink-0">
                <Link href="/">
                    <img src="/SHPE_logo_horiz_TexasA&M.svg" alt="tamuSHPE Logo" width={100} height={100} />
                </Link>
            </div>
            <div className="flex items-center justify-between w-full">
                <ul className="sm:flex flex-1 sm:justify-start gap-8 absolute sm:static top-14 right-2 bg-black sm:w-auto sm:bg-transparent p-4 sm:p-0">
                    {links.map((link, index) => {
                        return (
                            <li key={index} className="relative group min-w-[100px] text-center">
                                <Link href={link.path} target = "_blank" rel = "noopener noreferrer" className="transition-all duration-200 flex justify-center">
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </footer>
    );
}