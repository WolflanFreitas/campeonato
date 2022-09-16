import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'react-bootstrap'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
