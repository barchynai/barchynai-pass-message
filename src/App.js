import { useState } from "react";
import './App.css' 


function App() {
  const [message, setMessage] = useState("");
  const [prevMessage, setPrevMessage] = useState("");
  const pass = (e) => {
    e.preventDefault();
    if (!message) {
      return;
    }
    setPrevMessage(message);
    setMessage("");
  };
  return (
    <div className="App">
      <form onSubmit={pass}>
        <div className="header">
        <p>A Message You Would Like To Pass</p>
        <input className="input" value={message} onChange={(e) => setMessage(e.target.value)} />
        <button type="submit">submit</button>
        </div>
        </form>
        <div className="header">
        <p>Last Message Delivered</p>
      <p className="message">{prevMessage}</p>
        </div>
     
    </div>
  );
}

export default App;
