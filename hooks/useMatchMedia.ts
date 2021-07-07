import { useCallback, useState, useEffect } from 'react';

const useMatchMedia = (query: string) => {
  const [match, setMatch] = useState(false);
  const canMatch =
    typeof window === 'object' && typeof window.matchMedia === 'function';

  const queryMedia = useCallback(() => {
    const queryList = window.matchMedia(query);
    setMatch((queryList && queryList.matches) || false);
    return queryList;
  }, [canMatch]);

  useEffect(() => {
    if (!canMatch) return;
    const queryList = queryMedia();

    queryList &&
      Object.keys(window).forEach(key => {
        if (/^on/.test(key)) {
          queryList.addEventListener(key.slice(2), queryMedia);
        }
      });

    return () =>
      queryList &&
      Object.keys(window).forEach(key => {
        if (/^on/.test(key)) {
          queryList.removeEventListener(key.slice(2), queryMedia);
        }
      });
  }, [queryMedia, canMatch]);

  return match;
};

export default useMatchMedia;
