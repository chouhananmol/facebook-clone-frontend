import { Provider } from 'react-redux';
import '../styles/globals.css';
import { SessionProvider } from "next-auth/react"
import Store from '../public/src/app/Store';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={Store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  )
};

export default MyApp;
