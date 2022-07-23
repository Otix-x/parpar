import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { eyeIcon, unlockIcon } from '../assets/images';

const FormInput = ({ icon, placeholder, isPassword, type = 'text' }) => {
  return (
    <div className={`flex items-center pl-3 rounded-md bg-soft ${isPassword && 'pr-3'}`}>
      {isPassword ? (
        <img src={unlockIcon} className='w-6' />
      ) : (
        <FontAwesomeIcon className='text-xl w-6' icon={icon} />
      )}
      <input
        type={type}
        placeholder={isPassword ? 'Enter your password' : placeholder}
        className='px-3 py-2.5 w-full bg-transparent'
      />
      {isPassword && <img src={eyeIcon} className='w-5 cursor-pointer' />}
    </div>
  );
};

export default FormInput;
