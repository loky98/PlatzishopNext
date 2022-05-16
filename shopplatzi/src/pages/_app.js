import '../styles/globals.css';
import Header from '@components/Header';
import AppContext from '@context/AppContext';
import useInicialState from '@hooks/useInicialState';

function MyApp({ Component, pageProps }) {
  const initialState = useInicialState();
  return (
    <AppContext.Provider value={initialState}>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
