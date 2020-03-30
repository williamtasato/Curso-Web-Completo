import React from 'react'
import {ChildrenWithProps} from '../utils/utils'
//import Filho from './Filho'



export default props =>
    <div>
        <h1> {props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {/* <Filho nome='Pedro' sobrenome= {props.sobrenome}/>
    <Filho {...props}/>
    <Filho {...props} nome="Carla"/>  {props.children} */}  
            {
                ChildrenWithProps(props)
            }
        </ul>
    </div>