import './header.css';

let renderCount = 0;

export function Header() {
  renderCount++;
  
  return (
   <h3 className="Header">renderizou {renderCount}</h3>
  )
}

