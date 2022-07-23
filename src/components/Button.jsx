const Button = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className={`${rest.className} rounded-full transition-all duration-200 hover:opacity-80 active:translate-y-0.5`}>
      {children}
    </button>
  );
};

export default Button;
