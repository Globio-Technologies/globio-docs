import type { Metadata } from 'next';
import { Layout } from 'nextra-theme-docs';
import { getPageMap } from 'nextra/page-map';
import 'nextra-theme-docs/style.css';
import '../styles/globals.css';
import { DocsProviders } from '../components/DocsProviders';
import themeConfig from '../theme.config';

export const metadata: Metadata = {
  title: {
    default: 'Globio Documentation',
    template: '%s | Globio Documentation',
  },
  description: 'Globio documentation — game backend as a service',
  icons: {
    icon: '/favicon.ico',
  },
  metadataBase: new URL('https://docs.globio.stanl.ink'),
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pageMap = await getPageMap();

  return (
    <html lang="en">
      <body>
        <DocsProviders>
          <Layout {...themeConfig} pageMap={pageMap}>
            {children}
          </Layout>
        </DocsProviders>
      </body>
    </html>
  );
}
