import {FunctionComponent} from 'react'
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

import {PiBatteryEmpty} from 'react-icons/Pi'
import {RiRainyFill} from 'react-icons/Ri'
import {AiOutlineHeart} from 'react-icons/Ai'
import {SlEnergy} from 'react-icons/Sl'

interface ShowModalMantineProps {
    boodschap: string
    titel: string
    achtergrondkleur: string
    icoon: string
}

const ShowModalMantine: FunctionComponent<ShowModalMantineProps> = ({titel, boodschap, achtergrondkleur, icoon}) => {
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <>
            <Modal opened={opened} onClose={close} withCloseButton={false}>
                {boodschap}
            </Modal>

            <Button bg={achtergrondkleur} onClick={open}>
                {icoon == "batteryempty" && <PiBatteryEmpty />}
                {icoon == "rainiefill" && <RiRainyFill />}
                {icoon == "outlineheart" && <AiOutlineHeart />}
                {icoon == "energy" && <SlEnergy />}
                {titel}
            </Button>
        </>
    )
}

export default ShowModalMantine
