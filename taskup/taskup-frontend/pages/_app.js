import React from 'react';
import '../styles/globals.css'
import Layout from '../components/Layout'
import { useEffect, useState } from 'react'
import keycloak from '../utils/keycloak'

function MyApp({ Component, pageProps }) {
  const [keycloakInitialized, setKeycloakInitialized] = useState(false)

  useEffect(() => {
    keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
      setKeycloakInitialized(true)
    }).catch(() => {
      console.error('Failed to initialize Keycloak')
    })
  }, [])

  if (!keycloakInitialized) {
    return <div>Loading...</div>
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  if (appContext.Component.getInitialProps) {
    const pageProps = await appContext.Component.getInitialProps(appContext.ctx);
    return { ...appProps, pageProps };
  }

  return { ...appProps };
}

export default MyApp