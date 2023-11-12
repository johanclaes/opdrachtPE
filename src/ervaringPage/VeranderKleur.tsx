import {FunctionComponent, useContext} from 'react'
import AchtergrondContext from '../routing/AchtergrondContext.tsx'

interface VeranderKleurProps {
}
const VeranderKleur: FunctionComponent<VeranderKleurProps> = () => {
    const {activeKleur,setactiveKleur} = useContext(AchtergrondContext)

    return (
        <>
            <h4>Kies Achtergrondkleur</h4>
            <button className="button1" onClick={() => setactiveKleur("bisque") }>Bisque</button>
            <button className="button2" onClick={() => setactiveKleur("lightblue") }>LightBlue</button>
            <button className="button3" onClick={() => setactiveKleur("lightgreen") }>LightGreen</button>
        </>
    )
}

export default VeranderKleur
