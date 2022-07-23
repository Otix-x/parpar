import { faUser } from '@fortawesome/free-regular-svg-icons';
import { background1 } from '../../assets/images';
import AuthForm from '../../components/AuthForm';
import FormInput from '../../components/FormInput';
import useBodyBackground from '../../hooks/useBodyBackground';

const ClientLogin = () => {
  useBodyBackground(background1);

  return (
    <AuthForm btnText='SIGN IN' className='px-8 py-40 mr-auto ml-auto lg:mr-0'>
      <FormInput icon={faUser} placeholder='Enter your username' />
      <FormInput icon={faUser} placeholder='Enter your password' isPassword type='password' />
      <div className='text-center mt-4'>
        New on our platform ? <span className='text-primary'>Create an account</span>
      </div>
    </AuthForm>
  );
};

export default ClientLogin;
