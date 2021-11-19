import React, { useEffect, useState } from "react";
import axios from "./axios";
import { injected } from "./components/wallet/connectors" 
import { useWeb3React } from "@web3-react/core";

function App() {
  const { active, account, library, connector, activate, deactivate } = useWeb3React()

  const [messages, setMessages] = useState();

  useEffect(() => {
      axios.get('/')
      .then(res => {
        console.log(res.data);
        setMessages(res.data);
      })
  }, []);

  async function connect() {
    try {
      console.log("click")
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <span className="mt-3 text-xl bg-yellow-100 p-1 rounded-sm"> Demo test connect to MetaMask</span>
      <button className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800" onClick={connect}>Connect to MetaMask</button>
      {active ? <span>Connected with <b>{account}</b></span> : <span>Not connected</span>}
      <button className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800" onClick={disconnect}> Disconnect </button>
    </div>
  );
}

export default App;
