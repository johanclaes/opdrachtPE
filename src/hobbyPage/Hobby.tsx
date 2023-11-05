import {FunctionComponent} from 'react'
import Expo from './Expo.tsx'
import Fietsen from './Fietsen.tsx'
import Koken from './Koken.tsx'

import { useContext} from 'react'
import {AchtergrondKleur} from '../ervaringPage/HowDoYouFeel.tsx'

interface HobbyProps {}

const Hobby: FunctionComponent<HobbyProps> = () => {


    const achtergrondkleur = useContext(AchtergrondKleur)
    return (
        <>
            <div style={{backgroundColor: achtergrondkleur}}>
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
