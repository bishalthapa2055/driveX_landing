import "./Navbar.css"
import { data } from "./data"
const Navbar = () => {
    return (
        <>
            <nav>
                <div className='container navbar__container'>
                    <div className="image__logo">

                        <a href='#' className='nav__logo'>
                            <img src='./nav__logo.png' alt='logo' />
                        </a>
                        <h2>Drive X</h2>
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

                </div>
            </nav>
        </>
    )
}

export default Navbar