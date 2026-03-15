import { DocsLogo } from './components/DocsLogo';

const config = {
  navbar: <DocsLogo />,
  docsRepositoryBase:
    'https://github.com/Globio-Technologies/globio-docs/blob/main',
  footer: (
    <span>
      © {new Date().getFullYear()} StaNLink Inc.
      {' '}Built with Globio.
    </span>
  ),
  editLink: 'Edit this page on GitHub',
  feedback: {
    content: 'Question? Give us feedback',
    labels: 'feedback',
  },
  navigation: {
    prev: true,
    next: true,
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  toc: {
    backToTop: 'Back to top',
  },
};

export default config;
