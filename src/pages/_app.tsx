import { CssBaseline } from '@material-ui/core';
import '../styles/globals.css'
import red from '@material-ui/core/colors/red';
import amber from '@material-ui/core/colors/amber'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import axios from 'axios'
import {SWRConfig} from 'swr'

axios.defaults.baseURL = process.env.BASE_URL
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.withCredentials = true

const fetcher = (url:string) => axios.get(url).then(response => response.data)

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'hsl(229, 100%, 58%)',
      dark: 'hsl(229, 100%, 35%)',
      light: 'hsl(229, 100%, 81%)'
    },
    secondary: {
      main: 'hsl(359, 94%, 32%)',
      light: 'hsl(359, 55%, 58%)',
      dark: 'hsl(359, 94%, 42%)'
    },
    error: {
      main: 'hsl(356, 81%, 49%)',
      light: 'hsl(356, 81%, 59%)',
      dark: 'hsl(356, 81%, 39%)'
    },
    success: {
      dark: 'hsl(140, 81%, 22%)',
      main: 'hsl(140, 81%, 31%)',
      light: 'hsl(140, 81%, 40%)'
    },
    background: {
      default: 'hsl(50, 100%, 97%)',
      // darker: hsl(50, 100%, 80%)
      paper: '#fff'
    },
  },
  spacing: 8,
  typography: {
    //fontFamily: '"Catamaran", "Roboto", "Arial"'
  }
});

export default class MyApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>Spanish Bites</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <link rel="icon" type="svg" href="/logo3.svg" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
            <style jsx global>{`
              #nprogress .bar {
                background: hsl(301, 77%, 40%);
                height: .2rem
              }
            `}</style>
            <SWRConfig value={{fetcher}}>
              <Component {...pageProps} />
            </SWRConfig>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
