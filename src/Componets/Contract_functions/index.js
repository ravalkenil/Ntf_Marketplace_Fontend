// 0x713DD4856df63a5D2B1E68Aec9A6aE6D17C61554

import React, { useContext, useEffect, useState } from "react";
import Abi from "./abi.json"
import { useAccount } from 'wagmi';
// import Webb3model from "web3modal";
import { ethers } from "ethers";
import { NFTStorage, File, Blob } from 'nft.storage';
// import Router, { useRouter } from "next/router";
// import axios from "axios";
// import { NFTStorage, File, Blob  } from 'nft.storage';
// import { create as ipfsHttpClient } from "ipfs-http-client";

export const useNFtmarketplaceContext = React.createContext();

export const NFTmarketplaceprovider = ({ children }) => {

  const abi = Abi.abi
  const [State, setState] = useState([])
  const [Data, setData] = useState({ price: null, title: null, creator: null, des: null, _imgUrl: null });
  const { address } = useAccount();



  useEffect(() => {
    const Get_Contract = async () => {
      const contract_add = '0xa8Cb7C5d79e048Cf0F75F53F8a4725c26347bA01';
      const contract_abi = abi;
      const { ethereum } = window;
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contract_add, contract_abi, signer);
      setState({ provider, signer, contract });
    }
    Get_Contract();
  }, [])

  // ------------------------ Nft Mint function------------------------------

  const { contract } = State;

  const changeHandler = e => {
    setData({ ...Data, [e.target.name]: e.target.value });
  }
  const handleImangechange = e => {
    setData({
      ...Data,
      _imgUrl: e.target.files[0],
      imgUrl: URL.createObjectURL(e.target.files[0]),
    });
  }
  const nftprice = parseFloat(Data.price);
  const Mint_nft = async () => {
    try {
      const amount = Number(Data.price);
      const price = ethers.utils.parseEther(amount.toString());
      const NFT_STORAGE_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGFEMjAxNUFBQTA5NDYwODcyQTliNmUzQWI5MjY2ZTU2QjMwM0Q3QzUiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY4MjU3NzEyODk3MCwibmFtZSI6Ik5mdF9tYXJrZXRwbGFjZSJ9.4-NRj6IeUwT6VeaSaKTozhRKHUqAvWrIxVRcy0uXc28';
      const client = new NFTStorage({ token: NFT_STORAGE_TOKEN });
      const imageFile = new File([Data._imgUrl], 'nft.png', { type: 'image/png' });
      const metaData = await client.store({
        name: Data.title,
        description: Data.des,
        image: imageFile,
        price: Data.price,
        creator: Data.creator,
      });
      const imgurl1 = metaData.data.image.pathname;
      const i = imgurl1.replace('/nft.png', '.ipfs.dweb.link/nft.png');
      const url = i.replace('//', 'https://');
      const someData = new Blob([Data]);
      const cid = await client.storeBlob(someData);
      const mint_token = await contract.Add_nft(address, price, Data.title, url, Data.des, Data.creator);
      const a = await mint_token.wait();
      
    } catch (error) {
      
    }
  }

  return (
    <useNFtmarketplaceContext.Provider
      value={{ changeHandler, handleImangechange, Mint_nft, Data, State, address }}
    >
      {children}
    </useNFtmarketplaceContext.Provider>
  );
};