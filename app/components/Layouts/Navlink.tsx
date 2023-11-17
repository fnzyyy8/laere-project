import React from 'react';

interface NavlinkProps {
    href: string;
    title: string;
}

const Navlink: React.FC<NavlinkProps> = ({ href, title }) => {
    return (
        <li>
            <a href={href}>{title}</a>
        </li>
    );
};

export default Navlink;