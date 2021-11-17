import React, { useEffect, useState } from "react";
import axios from "./axios";

function App() {

  const [messages, setMessages] = useState();

  useEffect(() => {
      axios.get('/')
      .then(res => {
        console.log(res.data);
        setMessages(res.data);
      })
  }, []);

  return (
    <div>
      <p>{messages}</p>
    </div>
  );
}

export default App;
