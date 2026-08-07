'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { Theme } from '@radix-ui/themes';

type Appearance = 'light' | 'dark';

interface ThemeContextValue {
  appearance: Appearance;
  toggleAppearance: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const useAppTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useAppTheme must be used within AppThemeProvider');
  return ctx;
};

const AppThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [appearance, setAppearance] = useState<Appearance>('dark');

  // Load saved preference on mount
  useEffect(() => {
    const saved = localStorage.getItem('appearance') as Appearance | null;
    if (saved) setAppearance(saved);
  }, []);

  const toggleAppearance = () => {
    setAppearance((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('appearance', next);
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ appearance, toggleAppearance }}>
      <Theme accentColor="gray" grayColor="gray" appearance={appearance}>
        {children}
      </Theme>
    </ThemeContext.Provider>
  );
};

export default AppThemeProvider;
