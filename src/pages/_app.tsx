import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { SidebarDrawerProvider } from '../context/SidebarDrawerContext/'
import { CartContextProvider } from '../context/CartContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <SidebarDrawerProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </SidebarDrawerProvider>
    </CartContextProvider>
  )
}

export default MyApp
