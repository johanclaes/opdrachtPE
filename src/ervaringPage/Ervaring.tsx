import {FunctionComponent} from 'react'
import HowDoYouFeel from './HowDoYouFeel.tsx'

import Testimonials from './Testimonials.tsx'
import DifferentTechnology from './DifferentTechnology.tsx'
import Testing from './Testing.tsx'
import userContext5 from './Testing.tsx'


interface ErvaringProps {

}

const Ervaring: FunctionComponent<ErvaringProps> = () => {
    return (
        <>
            <userContext5.Provider value="abc">
                <br/>
                <h2>Ervaring</h2>
                <br/>
                <DifferentTechnology/>
                <br/>
                <Testimonials/>
                <br/>
                {/*<HowDoYouFeel/>*/}
                <br/>
                <Testing/>
            </userContext5.Provider>

        </>
    )
}

export default Ervaring
