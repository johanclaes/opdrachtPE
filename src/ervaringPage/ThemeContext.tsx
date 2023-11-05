import {Children, FunctionComponent} from 'react'
import {KleurenTheme} from './KleurenTheme.ts'
import {createContext} from 'react'

type ThemeContext = {
    children: React.ReactNode
}
interface ThemeContextProps {}

export const ThemeContext = createContext(KleurenTheme)

const ThemeContextProvider: FunctionComponent<ThemeContextProps> = () => {

    return (
        <>
            <ThemeContext.Provider value={KleurenTheme} {...Children}></ThemeContext.Provider>
        </>
    )
}

export default ThemeContextProvider
