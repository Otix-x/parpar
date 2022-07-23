import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { phoneIcon, sendIcon } from '../../assets/images';

import Container from '../../components/Container';

const Footer = () => {
  return (
    <footer className='py-                16 mt-40 bg-soft'>
      <Container className='flex flex-wrap gap-12 pt-10'>
        <div className='flex-grow'>
          <h4 className='font-bold text-2xl'>Newsletter</h4>
          <p>receive our lastest news and offer</p>
          <div className='flex items-center pr-4 mt-4 rounded-full max-w-max overflow-hidden bg-white'>
            <input className='px-4 py-3 outline-none' placeholder='Enter your email...' />
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
        </div>

        <div className='flex-grow'>
          <h4 className='font-bold text-2xl'>Contact</h4>
          <p>If you have any question, call us</p>
          <div className='flex items-center gap-3 mt-4'>
            <img src={phoneIcon} />
            <p>+84-97-224-8890</p>
          </div>
          <div className='flex items-center gap-3 mt-4'>
            <img src={sendIcon} />
            <p>example.1234@sis.hust.edu.vn</p>
          </div>
        </div>

        <div className='flex-grow'>
          <h4 className='font-bold text-2xl'>Follow us</h4>
          <div className='flex gap-10 text-2xl mt-4'>
            <FontAwesomeIcon className='cursor-pointer' icon={faFacebookF} />
            <FontAwesomeIcon className='cursor-pointer' icon={faInstagram} />
            <FontAwesomeIcon className='cursor-pointer' icon={faTwitter} />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
