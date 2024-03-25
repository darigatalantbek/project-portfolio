import { Link } from "react-router-dom";
import './header.css'

function Header() {
    return (
        <div className='container'>
            <div className='left'>
                <Link to='/' id="text">Dariga</Link>
            </div>
            <div className='right'>
                <Link to='/about' id="text">About</Link>
                <Link to='/experience' id="text">Experience</Link>
                <Link to='/projects' id="text">Projects</Link>
            </div>
        </div>
    )
}

export default Header;