import { AppProps } from 'next/app';

import { useStore, wrapper } from '@store/index';
import { Provider } from 'react-redux';

export default function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
