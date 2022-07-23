import { faEnvelope, faPaperPlane, faUser } from '@fortawesome/free-regular-svg-icons';
import { background1, background2 } from '../../assets/images';
import AuthForm from '../../components/AuthForm';
import FormInput from '../../components/FormInput';
import useBodyBackground from '../../hooks/useBodyBackground';

const ClientRegister = () => {
  useBodyBackground(background1);

  return (
    <AuthForm btnText='SIGN UP' className='px-8 py-20 mr-auto ml-auto lg:mr-0'>
      <FormInput icon={faUser} placeholder='Enter your firstname' />
      <FormInput icon={faUser} placeholder='Enter your lastname' />
      <FormInput icon={faUser} placeholder='Enter your username' />
      <FormInput icon={faUser} isPassword type='password' />
      <FormInput icon={faEnvelope} type='email' placeholder='Enter your email' />
      <FormInput icon={faPaperPlane} placeholder='Enter your address' />
      <div className='text-center mt-4'>
        Already have an account ? <span className='text-primary'>Sign in</span>
      </div>
    </AuthForm>
  );
};

export default ClientRegister;
