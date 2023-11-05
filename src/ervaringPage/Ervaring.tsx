import {FunctionComponent } from 'react'
import HowDoYouFeel from './HowDoYouFeel.tsx'
import Testimonials from './Testimonials.tsx'
import DifferentTechnology from './DifferentTechnology.tsx'

import { useContext} from 'react'

import {AchtergrondKleur} from './HowDoYouFeel.tsx'


interface ErvaringProps {}

const Ervaring: FunctionComponent<ErvaringProps> = () => {

    const achtergrondkleur = useContext(AchtergrondKleur)

    return (
        <>

            <div style={{backgroundColor: achtergrondkleur}}>
                <br/>
                <h2>Ervaring</h2>
                <br/>
                <DifferentTechnology/>
                <br/>
                <Testimonials/>
                <br/>
                <HowDoYouFeel/>
                <br/>

            </div>


        </>
    )
}

export default Ervaring
