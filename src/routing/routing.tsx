import {FunctionComponent} from 'react'
import {Route, Routes} from 'react-router-dom'
import Ervaring from '../ervaringPage/Ervaring.tsx'
import Hobby from '../hobbyPage/Hobby.tsx'
import Home from '../homePage/Home.tsx'

interface RoutingProps {

}

const Routing: FunctionComponent<RoutingProps> = () => {
    return (
        <Routes>
            <Route index element={<Home/>}/>
            <Route path={'/ervaring'} element={<Ervaring/>}/>
            <Route path={'/hobby'} element={<Hobby/>}/>
        </Routes>
    )
}

export default Routing
