import {FunctionComponent } from 'react'
import HowDoYouFeel from './HowDoYouFeel.tsx'
import Testimonials from './Testimonials.tsx'
import DifferentTechnology from './DifferentTechnology.tsx'
import { useContext} from 'react'
import VeranderKleur from './VeranderKleur.tsx'
import AchtergrondContext from '../routing/AchtergrondContext.tsx'


interface ErvaringProps {}

const Ervaring: FunctionComponent<ErvaringProps> = () => {
    const achtergrond = useContext(AchtergrondContext)
    return (
        <>

            <div style={{backgroundColor: achtergrond.activeKleur}}>
                <br/>
                <h2>Ervaring</h2>
                <br/>
                <DifferentTechnology/>
                <br/>
                <Testimonials/>
                <br/>
                <HowDoYouFeel/>
                <br/>
                <VeranderKleur/>

            </div>


        </>
    )
}

export default Ervaring
