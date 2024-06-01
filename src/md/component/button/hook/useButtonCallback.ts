import { MouseEvent, useCallback } from 'react';
import { useAppRouter } from '../../../../router/hook/useAppRouter';

export const useButtonCallback = (type: string, url?: string) => {
  const { navigate } = useAppRouter();

  const handleClick = useCallback(
    (callback?: () => void) => (event: MouseEvent) => {
      if (type !== 'submit') {
        event.stopPropagation();
        event.preventDefault();
        if (callback) {
          callback();
        } else if (url) {
          url.startsWith('http') ? window.open(url) : navigate?.(url);
        }
      }
    },
    [url, type, navigate],
  );

  const addHref = useCallback((url?: string) => {
    let data = {};
    url && (data = { href: url });
    return data;
  }, []);

  return { handleClick, addHref };
};
