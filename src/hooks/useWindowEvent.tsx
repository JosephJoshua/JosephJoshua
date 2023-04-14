import { useEffect } from 'react';

const useWindowEvent = <K extends keyof WindowEventMap>(
  type: K,
  handler: (event: WindowEventMap[K]) => void,
) => {
  useEffect(() => {
    if (window == null) return;

    window.addEventListener(type, handler);
    return () => window.removeEventListener(type, handler);
  }, []);
};

export default useWindowEvent;
