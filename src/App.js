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
    <div>
      <p>{messages}</p>
      <button onClick={connect}> Connect to MeataMask</button>
      {active ? <span>Connected with <b>{account}</b></span> : <span>Not connected</span>}
      <button onClick={disconnect}></button>
    </div>
  );
}

export default App;
