import {FunctionComponent, useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import {PiBatteryEmpty} from 'react-icons/Pi'
import {RiRainyFill} from 'react-icons/Ri'
import {AiOutlineHeart} from 'react-icons/Ai'
import {SlEnergy} from 'react-icons/Sl'

interface ShowModalProps {
    boodschap: string
    titel: string
    achtergrondkleur: string
    icoon: string
}

const ShowModal: FunctionComponent<ShowModalProps> = ({titel, boodschap, achtergrondkleur, icoon}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <Button variant={achtergrondkleur} onClick={handleShow}>
                {icoon == "batteryempty" && <PiBatteryEmpty />}
                {icoon == "rainiefill" && <RiRainyFill />}
                {icoon == "outlineheart" && <AiOutlineHeart />}
                {icoon == "energy" && <SlEnergy />}
                {titel}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{titel}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{boodschap}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ShowModal
