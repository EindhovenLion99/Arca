'use client';

import { IconButton } from '@radix-ui/themes';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useAppTheme } from './AppThemeProvider';

const ThemeToggle = () => {
  const { appearance, toggleAppearance } = useAppTheme();

  return (
    <IconButton
      variant="ghost"
      color="gray"
      onClick={toggleAppearance}
      aria-label="Toggle dark mode"
    >
      {appearance === 'light' ? <FiMoon /> : <FiSun />}
    </IconButton>
  );
};

export default ThemeToggle;
