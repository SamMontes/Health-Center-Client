import { ThemeProvider } from '@mui/material';
import 'App.css';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import Root from 'routes';
import store from 'store';
import 'style/index.scss';
import { lightTheme } from 'theme/lightTheme';
import PrerenderTailwind from 'views/prerender/PrerenderTailwind';

function App() {
  return (
    <Provider store={store}>
      <PrerenderTailwind />
      <ThemeProvider theme={lightTheme}>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        >
          <Root />
        </SnackbarProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
