import { ChakraProvider } from "@chakra-ui/react";
import myTheme from "@/styles/theme"
import { UserContextProvider } from '@/lib/UserContext';
import { supabase } from '@/utils/supabaseClient'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={myTheme}>
      <UserContextProvider supabaseClient={supabase}>
        <Component {...pageProps} />
      </UserContextProvider>
    </ChakraProvider>
  )
}

export default MyApp
