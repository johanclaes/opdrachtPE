import {FunctionComponent, createContext } from 'react'
import { Flex} from '@mantine/core';

import ShowModalMantine from './ShowModalMantine.tsx'


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

                <ShowModalMantine boodschap={"Neem een cola uit de koelkast!"} titel={"Slowly Empty"} achtergrondkleur={"grey"} icoon={"batteryempty"}/>
                <ShowModalMantine boodschap={"Na regen komt er .. "} titel={"Rainy Cool Down"} achtergrondkleur={"bluegreen"} icoon={"rainiefill"}/>
                <ShowModalMantine boodschap={"Tijd voor een goed gesprek..."} titel={"Flower Power"} achtergrondkleur={"violet"} icoon={"outlineheart"}/>
                <ShowModalMantine boodschap={"Tijd om resultaten te boeken"} titel={"Can Do !"} achtergrondkleur={"green"} icoon={"energy"}/>

            </Flex>
        </>
    )
}

export default HowDoYouFeel

