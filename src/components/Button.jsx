const Button = ({ children, primary, rounded = true, ...rest }) => {
  return (
    <button
      {...rest}
      className={`${rest.className} 
        ${primary && 'text-white bg-primary'}
        ${rounded && 'rounded-full'}
        flex-center transition-all duration-200 hover:opacity-80 active:translate-y-0.5`}
    >
      {children}
    </button>
  );
};

export default Button;
