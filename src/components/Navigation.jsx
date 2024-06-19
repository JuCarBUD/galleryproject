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
    <div>
        <Link to="./cborabora">
            <figure>
                <Cborabora />
                <figcaption>Cborabora</figcaption>
            </figure>
        </Link>
        <Link to="./cborabora2">
            <figure>
                <Cborabora2 />
                <figcaption>Cborabora2</figcaption>
            </figure>
        </Link>
        <Link to="./cborabora3">
            <figure>
                <Cborabora3 />
                <figcaption>Cborabora3</figcaption>
            </figure>
        </Link>
         <Link to="./cborabora4">
            <figure>
                <Cborabora4 />
                <figcaption>Cborabora4</figcaption>
            </figure>
        </Link>
        <Link to="./cborabora5">
            <figure>
                <Cborabora5 />
                <figcaption>Cborabora5</figcaption>
            </figure>
        </Link>
        <Link to="./cborabora6">
            <figure>
                <Cborabora6 />
                <figcaption>Cborabora6</figcaption>
            </figure>
        </Link>
    </div>
  )
}

export default Navigation
