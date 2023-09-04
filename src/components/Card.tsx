

import React , {ReactNode} from "react"
import "./Card.css"

type Cardprops ={
  children : ReactNode;
  className ?:string;
  onClick ?:() => void
}

const Card : React.FC<Cardprops> = ({children , className , onClick}) =>{
  return (
    <article className={`card ${className}`} onClick={onClick}>
      {children}
    </article>
  );
}

export default Card ;