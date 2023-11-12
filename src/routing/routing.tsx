import {FunctionComponent, useState} from 'react'
import {Route, Routes} from 'react-router-dom'
import Ervaring from '../ervaringPage/Ervaring.tsx'
import Hobby from '../hobbyPage/Hobby.tsx'
import Home from '../homePage/Home.tsx'
import AchtergrondContext from './AchtergrondContext.tsx'

interface RoutingProps {

}

const Routing: FunctionComponent<RoutingProps> = () => {
    const [activeKleur,setactiveKleur] = useState<string>('bisque')

    return (

        <AchtergrondContext.Provider value={{activeKleur,setactiveKleur}}>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path={'/ervaring'} element={<Ervaring/>}/>
                <Route path={'/hobby'} element={<Hobby/>}/>
            </Routes>
        </AchtergrondContext.Provider>



    )
}

export default Routing
