import {FunctionComponent} from 'react'
import FietsenLijst from './FietsenLijst.tsx'
import { Container, Flex, Stack} from '@mantine/core'
import './Fietsen.css';

interface FietsenProps {
}

const Fietsen: FunctionComponent<FietsenProps> = () => {

    return (
        <>
            <h2>Fietsen</h2>
            <Container fluid>
                <Flex
                    gap="md"
                    justify="flex-start"
                    align="flex-start"
                    direction="row"
                    wrap="wrap"
                >

                    <Stack
                            h={420}
                            bg="var(--mantine-color-blue-light)">
                            <h4>Click op de fiets die je interesseert ! </h4>
                            <FietsenLijst/>
                    </Stack>

                    <Stack
                        h={420}
                        bg="var(--mantine-color-blue-light)">
                        <p className="maximumBreedte">Je kan toch maar met 1 fiets tegelijk rijden ?
                            Ja dat klopt, maar het is best om steeds het juiste type te gebruiken afhankelijk van het doel.
                            En een oude fiets gewoon wegdoen, vind ik een beetje gek. Maar als iemand de juiste prijs geeft,
                            dan verkoop ik hem. Links een lijst van mijn fietsen en onder een filmke.
                        </p>
                        <iframe
                            src="../../public/2023mijn_fietsen.mp4"
                            title="YouTube video player"
                            style={{ border: 0 }}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </Stack>












                </Flex>

                <br/>



            </Container>
            <br/>
        </>
    )
}

export default Fietsen
