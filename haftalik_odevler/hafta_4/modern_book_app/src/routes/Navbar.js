import React from 'react'
import { Link, } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

export default function Navbar() {
    return (
        <>
            <nav className="flex gap-1 pt-3 pb-5">
                {/* create nav using react router dom Link property */}
                <Link to="/">
                    <span className="border-white hover:border-gray-800 px-4 py-2 rounded-lg mr-2 border-dashed border-2">
                        Home
                    </span>
                </Link>
                <Link to="/about">
                    <span className="border-white hover:border-gray-800 px-4 py-2 rounded-lg mr-2 border-dashed border-2">
                        About
                    </span>
                </Link>
                <div className="ml-auto flex">
                    <a
                        href="https://www.linkedin.com/in/mustafa-sahin-dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-white hover:border-gray-800 px-4 py-2 rounded-lg mr-2 border-dashed border-2"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/mtfsahin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-white hover:border-gray-800 px-4 py-2 rounded-lg mr-2 border-dashed border-2 underline"
                    >
                        <FaGithub />
                    </a>
                </div>
            </nav></>
    )
}
