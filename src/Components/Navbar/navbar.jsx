import './navbar.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className='navbar'>
            <Link activeClass="active" to="/" spy={true} duration={500} className='logo'>AIO - COB Monitor</Link>
            <nav className='navbarLinks'>
                <Link activeClass="active" to="/" spy={true} duration={500} className="ebEodError">EB.EOD.ERROR</Link>
                {/* <Link activeClass="active" to="/" spy={true} duration={500} className="performanceCheck">Performance Check</Link> */}
                <div className="settingContainer">
                    <Link activeClass="active" spy={true} duration={500} className="setting" onClick={() => setShowMenu(!showMenu)}>Setting</Link> {/*to="/Setting"*/}
                    {showMenu && (
                        <div className="navSetting">
                            <Link activeClass="active" to="/Setting" className="schedulePage" onClick={() => setShowMenu(false)}>Schedule</Link>
                            <Link activeClass="active" to="/SMTP" className="smtpPage" onClick={() => setShowMenu(false)}>SMTP</Link>
                        </div>
                    )}
                </div>
            </nav>
            <button type="submit" className="cobStart">COB Start</button>
        </nav>
    );
}

export default Navbar;
