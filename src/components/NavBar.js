import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    const [click, setClick] = useState(false)
    return (
        <>
            <nav className="nabar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo"> 
                    TRVL <i className='fab fa-typo3' />
                    </Link>
                    <div className="menu-icon">
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
