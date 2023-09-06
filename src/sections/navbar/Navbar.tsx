import "./Navbar.css"
import { data } from "./data"
import MenuIcon from '@mui/icons-material/Menu';
// import Popover from '@mui/material/Popover';
// import React from "react";
const Navbar = () => {

    // const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     setAnchorEl(event.currentTarget);
    // };

    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

    // const open = Boolean(anchorEl);
    // const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <nav>
                <div className='container navbar__container'>
                    <div className="image__logo">

                        <a href='#' className='nav__logo'>
                            <img src='./logo.png' alt='logo' />
                        </a>
                        <h3 className="drive__logo">Drive X</h3>
                    </div>

                    <ul className="nav__menu">
                        {
                            data.map(({ id, link, title }) => {
                                return (
                                    <>
                                        <li key={id}>
                                            <a href={link}>
                                                <h5>
                                                    {title}
                                                </h5>
                                            </a>
                                        </li>
                                    </>
                                )
                            })
                        }
                    </ul>

                    <button id="theme__icon"
                    //  onClick={handleClick}
                     >
                        <MenuIcon />
                    </button>
                    {/* <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                    >
                        <ul className="nav__menu__popover">
                            {
                                data.map(({ id, link, title }) => {
                                    return (
                                        <>
                                            <li key={id}>
                                                <a href={link}>
                                                    <h5>
                                                        {title}
                                                    </h5>
                                                </a>
                                            </li>
                                        </>
                                    )
                                })
                            }
                        </ul>

                    </Popover> */}

                </div>
            </nav>
        </>
    )
}

export default Navbar