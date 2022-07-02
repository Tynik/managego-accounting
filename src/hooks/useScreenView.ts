import { useEffect, useRef } from 'react';

export const useScreenView = () => {
  const contentRef = useRef<HTMLDivElement>();

  const setContentHeight = () => {
    contentRef.current.style.height = `${
      document.documentElement.clientHeight - contentRef.current.getBoundingClientRect().top
    }px`;
  };

  useEffect(() => {
    setContentHeight();

    window.addEventListener('resize', setContentHeight);
    return () => {
      window.removeEventListener('resize', setContentHeight);
    };
  }, []);

  return contentRef;
};
