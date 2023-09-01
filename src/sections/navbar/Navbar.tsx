import "./Navbar.css"
import { data } from "./data"
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
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

                    <button id="theme__icon">
                        <MenuIcon />
                    </button>

                </div>
            </nav>
        </>
    )
}

export default Navbar