import {FunctionComponent} from 'react'
import Expo from './Expo.tsx'
import Fietsen from './Fietsen.tsx'
import Koken from './Koken.tsx'

interface HobbyProps {

}

const Hobby: FunctionComponent<HobbyProps> = () => {

    return (
        <>
            <br/>
            <Expo/>
            <hr/>
            <Koken/>
            <hr/>
            <Fietsen/>
        </>
    )
}

export default Hobby
