import logo from './logo.svg';
import './App.css';
import Layouts from "./Componets/Layouts/Layouts";
import Home from './Componets/Pages/Home';
import {NFTmarketplaceprovider  } from "./Componets/Contract_functions/index"

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import {polygonMumbai} from 'wagmi/chains'

const chains = [polygonMumbai]
const projectId = 'a28c7bc7b556786d322dbdedeb8a4153'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)



function App() {
  return (
    <div >
      <WagmiConfig config={wagmiConfig}>
        <NFTmarketplaceprovider>
          <Layouts/>
        </NFTmarketplaceprovider>
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </div>
  );
}


export default App;
