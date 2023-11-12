import {createContext} from 'react'

interface AchtergrondContext {
    activeKleur: string
    setactiveKleur: (newKleur: string) => void
}

const AchtergrondContext = createContext<AchtergrondContext>( {
    activeKleur: '',
    setactiveKleur: () => {
        console.log('log_X')
    }
})

export default AchtergrondContext
