import { useState } from 'react';
import './App.css'
import { MemorizedHeader } from './Header';


function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  return (
    <div className="container">
      <MemorizedHeader name={name} />

      <p>Nome:</p>
      <input
        placeholder="Digite seu nome..."
        value={name}
        onChange={ (e) => setName(e.target.value) }
      />

      <br/>

      <p>Email:</p>
      <input
        placeholder="Digite seu email..."
        value={email}
        onChange={ (e) => setEmail(e.target.value) }
      />
    </div>
  )
}

export default App
