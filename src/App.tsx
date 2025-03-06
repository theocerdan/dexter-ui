import './App.css'
import {WagmiProvider} from "wagmi";
import { config } from './config.ts'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ConnectButtons from "./ConnectButtons.tsx";
import LiquidityPools from "./LiquidityPool.tsx";

/* Original Windows95 font (optional) */
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';
import original from 'react95/dist/themes/original';
import {createGlobalStyle, ThemeProvider} from "styled-components";
import {styleReset} from "react95";
import Swap from "./Swap.tsx";

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;

const queryClient = new QueryClient()

function App() {

  return (
    <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
              <GlobalStyles />
              <ThemeProvider theme={original}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                      <ConnectButtons />
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                          <Swap />
                      </div>
                      <div style={{ padding: 30 }}>
                          <LiquidityPools />
                      </div>
                  </div>
              </ThemeProvider>
          </QueryClientProvider>
      </WagmiProvider>
  )
}

export default App
