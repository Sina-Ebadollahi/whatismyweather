// style
import './NavBar.css'
// svg 
import toggleIcon from '../../Assets/themeColor.svg'
// hooks
import UseTheme from '../../Hooks/UseTheme'
// routing
import { Link } from 'react-router-dom';
export default function NavBar() {
    const {theme,changeTheme} = UseTheme();

    const handleClick = () => {
        const currentTheme = theme === 'dark' ? 'light' : 'dark';
        changeTheme(currentTheme)
    }
    return (
        <>
         <nav className={`navBar ${theme === 'dark' ? 'dark' : ''}`}>
             <div className={`logo-container`}>
                 <h2 className={theme === 'dark' ? 'dark' : ''}>WhatIsMyWeather</h2>
                 <img onClick={handleClick} style={{filter: theme === 'dark' ? 'invert(100%)' : 'invert(30%)'}} src={toggleIcon} alt="toggleTheme" title="toggle button" />
             </div>
             <div className={`link-container ${theme === 'dark' ? 'dark' : ''}`}>
                 <ul>
                     <li className={theme === 'dark' ? 'list-dark' : ''}>Cities Weather List</li>
                     <li className={theme === 'dark' ? 'list-dark' : ''}><Link to="/">Home</Link></li>
                     <li className={theme === 'dark' ? 'list-dark' : ''}><Link to="/contact">Contact</Link></li>
                 </ul>
             </div>

         </nav>   
        </>
    )
}
