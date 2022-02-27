import { useContext } from 'react';
import { MobileMenuOpenContext } from '../context/MobileMenuOpenProvider';

export const useMobileMenuOpen = () => useContext(MobileMenuOpenContext);
