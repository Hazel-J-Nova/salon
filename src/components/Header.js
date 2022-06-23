import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__your-first-visit'>
        <p className='header__paragrph paragraph'>Your first visit?</p>
        <p className='header__paragraph paragraph'>
          -<span className='header__your-first-visit--span'>20%</span>
          for the first
        </p>
        <p className='header__paragraph paragraph'>Classic hair coloring</p>
        <a href='#' className='btn header__btn header__btn--white'>
          - Book online
        </a>
      </div>
      <div className='header__main'>
        <div className='header__container'>
          <h1 className='header__main-heading'>
            <span className='header__main-heading--span'>Blonde</span>
            <span className='header__main-heading--span'>& highlight</span>
            <span className='header__main-heading--paragraph'>
              {' '}
              Define you're Uniqueness by your hair style
            </span>
          </h1>

          <a href='#' className='btn header__btn btn-black'>
            - our services
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
