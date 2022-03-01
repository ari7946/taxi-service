import { useState, useEffect } from 'react';

export default function useIsDesktop(): boolean {
  const [isDesktop, setDesktop] = useState<boolean>(true);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 800);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    updateMedia();
    return () => window.removeEventListener('resize', updateMedia);
  });

  return isDesktop;
}
