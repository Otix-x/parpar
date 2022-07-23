import Button from './Button';
import Container from './Container';

const AuthForm = ({ className, children, btnText }) => {
  return (
    <Container>
      <div className={`w-[440px] mt-10 max-w-full ${className} shadow-lg rounded-lg bg-white/80`}>
        <h1 className='text-5xl text-center font-bold'>
          Welcome back <span className='text-primary'>parpar__</span>
        </h1>
        <form className='mt-10 space-y-4'>{children}</form>
        <Button rounded={false} primary className='rounded-md mt-4 w-full px-4 py-3 font-bold'>
          {btnText}
        </Button>
      </div>
    </Container>
  );
};

export default AuthForm;
