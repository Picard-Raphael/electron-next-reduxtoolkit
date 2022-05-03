import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Props } from './Layout.type';

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header style={{ marginBottom: '50px' }}>
      <nav>
        <Link href='/'>
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href='/counter'>
          <a>Counter</a>
        </Link>{' '}
        |{' '}
        <Link href='/text'>
          <a>Text</a>
        </Link>
      </nav>
      <hr />
    </header>
    {children}
    <footer style={{ marginTop: '50px' }}>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
