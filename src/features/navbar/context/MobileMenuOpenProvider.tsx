import React, { useState, createContext } from 'react';

export const MobileMenuOpenContext = createContext(null);

export const MobileMenuOpenProvider = ({ children }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <MobileMenuOpenContext.Provider value={{ isMobileMenuOpen, toggleMobileMenu }}>
      {children}
    </MobileMenuOpenContext.Provider>
  );
};
