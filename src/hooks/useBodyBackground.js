import { useEffect } from 'react';

const useBodyBackground = (background) => {
  useEffect(() => {
    document.body.style.backgroundImage = `url("${background}")`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
  }, []);
};

export default useBodyBackground;
