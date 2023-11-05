import {FunctionComponent, createContext } from 'react'
import { Flex} from '@mantine/core';

import ShowModal from './ShowModal.tsx'


export const AchtergrondKleur = createContext("bisque")

interface HowDoYouFeelProps {
}

const HowDoYouFeel: FunctionComponent<HowDoYouFeelProps> = () => {

    return (
        <>
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


                <ShowModal boodschap={"Neem een cola uit de koelkast!"} titel={"Slowly Empty"} 
                            achtergrondkleur={"light"} icoon={"batteryempty"}/>
                <ShowModal boodschap={"Na regen komt er .. "} titel={"Rainy Cool Down"}
                            achtergrondkleur={"primary"} icoon={"rainiefill"}/>
                <ShowModal boodschap={"Tijd voor een goed gesprek "} titel={"Flower Power"}
                            achtergrondkleur={"warning"} icoon={"outlineheart"}/>
                <ShowModal boodschap={"Tijd om resultaten te boeken"} titel={"Can Do"}
                            achtergrondkleur={"success"} icoon={"energy"}/>
            </Flex>
        </>
    )
}

export default HowDoYouFeel

