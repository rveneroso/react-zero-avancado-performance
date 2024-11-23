import { memo } from 'react';

import './header.css';

export function Header({ name }) {

  console.log("COMPONENTE HEADER RENDERIZOU");
  
  return (
   <h3 className="Header">Bem vindo {name} </h3>
  )
}

export const MemorizedHeader = memo(Header);

