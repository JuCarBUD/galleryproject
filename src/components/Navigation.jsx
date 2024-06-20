import React from 'react'
import { Link } from "react-router-dom"
import Cborabora from './Cborabora'
import Cborabora2 from './Cborabora2'
import Cborabora3 from './Cborabora3'
import Cborabora4 from './Cborabora4'
import Cborabora5 from './Cborabora5'
import Cborabora6 from './Cborabora6'

const Navigation = () => {
  return (
    <nav>
    <div className="App" >
        <Link to="./cborabora" className="links">
            <figure className="image-size">
                <Cborabora />
                <figcaption>Cborabora</figcaption>
            </figure>
        </Link>
        <Link to="./cborabora2" className="links">
            <figure className="image-size">
                <Cborabora2 />
                <figcaption>Cborabora2</figcaption>
            </figure>
        </Link>
        <Link to="./cborabora3" className="links">
            <figure className="image-size"> 
                <Cborabora3 />
                <figcaption>Cborabora3</figcaption>
            </figure>
        </Link>
         <Link to="./cborabora4" className="links">
            <figure className="image-size">
                <Cborabora4 />
                <figcaption>Cborabora4</figcaption>
            </figure>
        </Link>
        <Link to="./cborabora5" className="links">
            <figure className="image-size">
                <Cborabora5 />
                <figcaption>Cborabora5</figcaption>
            </figure>
        </Link>
        <Link to="./cborabora6" className="links">
            <figure className="image-size">
                <Cborabora6 />
                <figcaption>Cborabora6</figcaption>
            </figure>
        </Link>
    </div>
    
    </nav>     
        
    
  )
}

export default Navigation
