import { createTheme } from '@mui/material';
import {
  ERROR_COLOR,
  INFO_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  SUCCESS_COLOR,
  TRANSPARENT_WHITE_COLOR,
  WARNING_COLOR,
  WHITE_COLOR,
} from './variable';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: PRIMARY_COLOR,
      contrastText: WHITE_COLOR,
    },
    secondary: {
      main: SECONDARY_COLOR,
      contrastText: WHITE_COLOR,
    },
    success: {
      main: SUCCESS_COLOR,
      contrastText: WHITE_COLOR,
    },
    info: {
      main: INFO_COLOR,
      contrastText: WHITE_COLOR,
    },
    warning: {
      main: WARNING_COLOR,
      contrastText: WHITE_COLOR,
    },
    error: {
      main: ERROR_COLOR,
      contrastText: WHITE_COLOR,
    },
  },
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 12,
    fontFamily: ['Nunito'],

    h2: {
      fontSize: 54,
      lineHeight: '74px',
    },

    h3: {
      fontSize: 44,
      lineHeight: '60px',
    },

    h4: {
      fontSize: 34,
      lineHeight: '42px',
    },

    h5: {
      fontSize: 24,
      lineHeight: '38px',
    },

    h6: {
      fontSize: 18,
      lineHeight: '21px',
    },

    body2: {
      fontSize: 14,
      lineHeight: '19px',
    },

    button: { textTransform: 'capitalize' },
  },
  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(5px)',
          background: TRANSPARENT_WHITE_COLOR,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 22 },
      },
    },
  },
});
