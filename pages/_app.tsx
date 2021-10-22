import 'material-icons/iconfont/material-icons.css';
import 'font-awesome/css/font-awesome.min.css';
import 'materialize-css/dist/css/materialize.min.css';
import '../styles/globals.css';

import { default as App } from 'next/app';
import Head from 'next/head';
export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <Component {...pageProps} />
      </div>
    </>;
  }
}