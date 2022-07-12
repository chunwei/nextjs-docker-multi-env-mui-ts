/*
 * @Author: Chunwei Lu
 * @Date: 2022-05-22 14:56:18
 * @LastEditTime: 2022-07-04 11:06:44
 * @LastEditors: Chunwei Lu
 * @FilePath: /nextjs-docker-multi-env/src/pages/_app.tsx
 */
import { CacheProvider, EmotionCache } from '@emotion/react'
import { NextPage } from 'next'
import { appWithTranslation } from 'next-i18next'
import { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { SettingsProvider } from '../contexts/SettingsContext'
import '../../styles/globals.css'
import ThemeProvider from '../theme'
import { createEmotionCache } from '../utils/create-emotion-cache'

// ** Extend App Props with Emotion
type ExtendedAppProps = AppProps & {
  Component: NextPage
  emotionCache: EmotionCache
}

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
const clientSideEmotionCache = createEmotionCache()

function MyApp(props: ExtendedAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>)
  return (
    <CacheProvider value={emotionCache}>
      <SettingsProvider>
        <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
      </SettingsProvider>
    </CacheProvider>
  )
}

export default appWithTranslation(MyApp)
