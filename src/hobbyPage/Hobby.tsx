import {FunctionComponent} from 'react'
import Expo from './Expo.tsx'
import Fietsen from './Fietsen.tsx'
import Koken from './Koken.tsx'

import { useContext} from 'react'
import AchtergrondContext from '../routing/AchtergrondContext.tsx'

interface HobbyProps {}

const Hobby: FunctionComponent<HobbyProps> = () => {
    const achtergrond = useContext(AchtergrondContext)
    return (
        <>
            <div style={{backgroundColor: achtergrond.activeKleur}}>
                <br/>
                <Expo/>
                <hr/>
                <Koken/>
                <hr/>
                <Fietsen/>
            </div>

        </>
    )
}

export default Hobby
