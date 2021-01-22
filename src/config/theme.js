import { createMuiTheme } from '@material-ui/core/styles';

const theme = {
  palette: {
    primary: {
      light: '#EEF2F7',
      main: '#3561A3',
      dark: '#2f2f4f',
      //contrastText: '#fff',
    },
    secondary: {
      light: '#858598',
      main: '#2F2F4F',
      dark: '#B1B1B1',
      //contrastText: '#fff',
    },
    // type: 'dark',
  },
  textField: {
    height: 45,
    fontWeight: 400,
  },
  typography: {
    useNextVariants: true,
    suppressDeprecationWarnings: true,
    fontSize: 15,
    fontColor: '#2f2f4f',
    // fontFamily: "Aktiv Grotesk"
    h3: {
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h4: {
      fontSize: '2.5rem',
      '@media (max-width:600px)': {
        fontSize: '1.7rem',
      },
    },
    h5: {
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h6: {
      '@media (max-width:600px)': {
        fontSize: '1.2rem',
      },
    },
  },
};

export const darkTheme = createMuiTheme({
  palette: {
    ...theme.palette,
  },
  textField: {
    ...theme.textField,
  },
  typography: {
    ...theme.typography,
  },
  overrides: {
    root: {
      '& .MuiTextField-root': {
        padding: 0,
        height: '25px',
      },
    },
    MuiInput: {
      root: {
        maxHeight: '30px !important',
      },
    },
  },
});
