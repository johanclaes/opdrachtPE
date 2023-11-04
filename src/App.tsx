import {FunctionComponent} from 'react'

import './App.css'

import {BrowserRouter} from 'react-router-dom'
import Routing from './routing/routing.tsx'
import Navigation from './routing/navigation.tsx'



interface AppProps {

}

const App: FunctionComponent<AppProps> = () => {


    return (
        <BrowserRouter>
            <Navigation/>
            <Routing/>
        </BrowserRouter>
    )
}

export default App
