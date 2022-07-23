import { createElement } from 'react';

const Container = ({ as = 'div', children, ...rest }) => {
  return createElement(
    as,
    {
      ...rest,
      className: `w-[1193px] max-w-full mx-auto px-2 md:px-6 lg:px-0 ${rest.className}`,
    },
    children
  );
};

export default Container;
