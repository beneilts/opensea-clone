import '../styles/globals.css'
import {ThirdwebWeb3Provider} from '@3rdweb/hooks'

const supportedChainIds = [4] // Rinkeby chain
const connectors = {
    injected: {}, // The unjected connector is a web3 connection method used by Metamask
}

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider 
        supportedChainIds={supportedChainIds}
        connectors={connectors}
    >
        <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  )
}

export default MyApp