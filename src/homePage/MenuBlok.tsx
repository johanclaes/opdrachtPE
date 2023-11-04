import {FunctionComponent} from 'react'
import { FaHeart } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";


interface MenuBlokProps {
    titel: string
    beschrijving: string
    item1: string
    item2: string
    item3: string
    item4: string
}

const MenuBlok: FunctionComponent<MenuBlokProps> = ({titel,beschrijving,item1, item2, item3, item4}) => {
    return (
        <>
            <div><h2>{titel}</h2>
                <h4>{beschrijving}</h4>
                <p><FaHeart/> {item1}</p>
                <p><BsHeart/> {item2}</p>
                <p><FaHeart/> {item3}</p>
                <p><BsHeart/> {item4}</p></div>

        </>
    )
}

export default MenuBlok
