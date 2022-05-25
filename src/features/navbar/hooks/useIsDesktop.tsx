import { useState, useEffect, useCallback } from 'react';

export default function useIsDesktop(): boolean {
  const [isDesktop, setDesktop] = useState<boolean>(true);

  const updateMedia = useCallback(() => {
    setDesktop(window.innerWidth > 800);
  }, [isDesktop]);

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    updateMedia();
    return () => window.removeEventListener('resize', updateMedia);
  });

  return isDesktop;
}
