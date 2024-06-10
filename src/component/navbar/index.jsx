import React, { useState } from 'react';
import { FaBars, FaHome } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { GrResume } from "react-icons/gr";
import { Link } from 'react-router-dom';
import logo from '../../assets/sk2.png';
import './style.scss';

const data = [
    {
        navIcon: <FaHome />,
        label: 'HOME',
        to: '/',
    },
    {
        navIcon: "",
        label: 'ABOUT ME',
        to: '/about',
    },
    {
        navIcon: "",
        label: 'SKILLS',
        to: '/skills',
    },
    {
        navIcon: <GrResume />,
        label: 'RESUME',
        to: '/resume',
    },
    {
        navIcon: "",
        label: 'PORTFOLIO',
        to: '/portfolio'
    },
    {
        navIcon: "",
        label: 'CONTACT',
        to: '/contact',
    },
];

const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon)
    };

    const closeMenu = () => {
        setToggleIcon(false);
    };

    return (
        <div>
            <nav className='navbar'>
                <div className='navbar__container'>
                    <Link to={'/'} className='navbar__container__logo'>
                        <img src={logo} alt='blank' />
                    </Link>
                </div>
                <ul className={`navbar__container__menu ${toggleIcon ? 'active' : " "}`}>
                    {data.map((item, key) => (
                        <li key={key} className='navbar__container__menu__item'>
                            <Link className='navbar__container__menu__item__links' to={item.to} onClick={closeMenu}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className='nav-icon' onClick={handleToggleIcon}>
                    {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
                </div>
            </nav>
        </div>
    )
}

export default Navbar;