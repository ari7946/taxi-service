import React, { useState, createContext, useMemo, useCallback } from 'react';

export const MobileMenuOpenContext = createContext(null);

export const MobileMenuOpenProvider = ({ children }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () =>
    useCallback(() => setMobileMenuOpen(!isMobileMenuOpen), [isMobileMenuOpen]);

  return (
    <MobileMenuOpenContext.Provider value={{ isMobileMenuOpen, toggleMobileMenu }}>
      {children}
    </MobileMenuOpenContext.Provider>
  );
};
