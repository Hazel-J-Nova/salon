import './Services.css';
import cream from '../icons/cream.png';
import hairDye from '../icons/hair-dye-kit.png';
import women from '../icons/woman.png';
const Services = () => {
  return (
    <div className='services'>
      <div className='services__group'>
        <img src={women} alt='' className='icon' />
        <h5 className='services__heading'> Expert Beauticians</h5>
        <p className='services__text'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum,
          exercitationem.
        </p>
      </div>
      <div className='services__group'>
        <img src={hairDye} className='icon' alt='' />
        <h5 className='services__heading'> Expert Beauticians</h5>
        <p className='services__text'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum,
          exercitationem.
        </p>
      </div>
      <div className='services__group'>
        <img src={cream} className='icon' alt='' />
        <h5 className='services__heading'> Expert Beauticians</h5>
        <p className='services__text'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum,
          exercitationem.
        </p>
      </div>
    </div>
  );
};

export default Services;
