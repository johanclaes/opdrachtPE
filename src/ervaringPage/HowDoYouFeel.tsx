import {FunctionComponent, useContext, createContext} from 'react'
import { Flex, Button } from '@mantine/core';
import './HowDoYouFeel.css';


import {PiBatteryEmpty} from 'react-icons/Pi'
import {RiRainyFill} from 'react-icons/Ri'
import {AiOutlineHeart} from 'react-icons/Ai'
import {SlEnergy} from 'react-icons/Sl'
import {ThemeContext} from 'styled-components'


interface HowDoYouFeelProps {
}

const HowDoYouFeel: FunctionComponent<HowDoYouFeelProps> = () => {
    const theme = useContext(ThemeContext)

    return (
        <>
            <ThemeContext.Provider value="abc">
                <h5>THEMAPROVIDER</h5>
            </ThemeContext.Provider>


            <h5>Change the background</h5>
            <Flex
                mih={100}
                bg="purple"
                gap="md"
                justify="center"
                align="center"
                direction="row"
                wrap="wrap"
            >
                <h3>How do You Feel ? </h3>
                <Button className="knop1"><PiBatteryEmpty/>   Slowly Empty...</Button>
                <Button className="knop2"><RiRainyFill/>   Rainy Cool Down</Button>
                <Button className="knop3"><AiOutlineHeart/>   Flower Power</Button>
                <Button className="knop4"><SlEnergy/>   Can Do ! </Button>

            </Flex>

        </>


    )
}

export default HowDoYouFeel



export type GlobalContent = {
        copy: string
        setCopy: (c: string) => void
    }
    export const MyGlobalContext = createContext<GlobalContent>({
        copy: 'Hello World',
        setCopy: () => {
        }
    })
    export const useGlobalContext = () => useContext(MyGlobalContext)
