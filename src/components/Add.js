import './Add.css';

const Add = () => {
  return (
    <div className='add'>
      <h3 className='add__heading'> Colour Day Offer</h3>
      <p className='add__text'>
        <span className='add__text--num'>-10% </span>
        on haircut <span className='add__text--color'>color and style</span>
      </p>
      <a href='#' className='btn btn__black add__btn--black'>
        - Book appointment
      </a>
    </div>
  );
};

export default Add;
