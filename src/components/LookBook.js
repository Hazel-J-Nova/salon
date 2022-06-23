import './LookBook.css';
import hair1 from '../images/hair1.jpg';
import hair2 from '../images/hair2.jpg';
import hair3 from '../images/hair3.jpg';
import hair4 from '../images/hair4.jpg';
import hair5 from '../images/hair5.jpg';
import hair6 from '../images/hair6.jpg';
const LookBook = () => {
  return (
    <section className='lookbook'>
      <h2 className='lookbook__heading'>Our lookbook</h2>
      <hr />
      <div className='lookbook__grid'>
        <img
          src={hair1}
          alt=''
          className='lookbook__image--small lookbook__image--small-1'
        />
        <img
          src={hair2}
          alt=''
          className='lookbook__image--large lookbook__image--large-1'
        />
        <img
          src={hair3}
          alt=''
          className='lookbook__image--small lookbook__image--small-2'
        />
        <img
          src={hair4}
          alt=''
          className='lookbook__image--large lookbook__image--large-2'
        />
        <img
          src={hair5}
          alt=''
          className='lookbook__image--small lookbook__image--small-3'
        />
        <img
          src={hair6}
          alt=''
          className='lookbook__image--large lookbook__image--large-3'
        />
      </div>
    </section>
  );
};

export default LookBook;
