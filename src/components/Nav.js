import './Nav.css';

const Nav = () => {
  return (
    <nav className='nav'>
      <div className='nav__brand'>
        <p className='nav__brand--text'>Ayesha</p>
      </div>
      <ul className='nav__nav-bar'>
        <li className='nav__nav-bar--link'>Home</li>
        <li className='nav__nav-bar--link'>About</li>
        <li className='nav__nav-bar--link'>Services</li>
        <li className='nav__nav-bar--link'>Lookbook</li>
        <li className='nav__nav-bar--link'>news</li>
        <li className='nav__nav-bar--link'>contact</li>
        <li className='nav_nav-bar--nav-icon'></li>
        <li className='nav_nav-bar--nav-icon'></li>
      </ul>
      <div className='nav__book'>
        <a href='#' className='nav__book--link'>
          - Book Online
        </a>
      </div>
    </nav>
  );
};

export default Nav;
