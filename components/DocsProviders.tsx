'use client';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@stanlink-inc/ui';

export function DocsProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}
