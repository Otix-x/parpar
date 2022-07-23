import { faUser } from '@fortawesome/free-regular-svg-icons';
import useBodyBackground from '../../hooks/useBodyBackground';
import { background2 } from '../../assets/images';
import AuthForm from '../../components/AuthForm';
import FormInput from '../../components/FormInput';

const AdminLogin = () => {
  useBodyBackground(background2);

  return (
    <AuthForm btnText='SIGN IN' className='px-8 py-40 mx-auto'>
      <FormInput icon={faUser} placeholder='Enter your username' />
      <FormInput icon={faUser} placeholder='Enter your password' isPassword type='password' />
    </AuthForm>
  );
};

export default AdminLogin;
