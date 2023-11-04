import {FunctionComponent} from 'react'
import { Box, Group, Stack } from '@mantine/core'


interface TestimonyProps {
    uitspraak: string
    logo: string
    naam: string

}

const Testimony: FunctionComponent<TestimonyProps> = ({naam,logo, uitspraak,}) => {
    return (
        <>
            <Box bg="lightgrey" my="xl"  p="10px" m="20px">
                <Group>
                    <Stack>
                        <img alt="foto-" src={logo} height="100"  />
                    </Stack>
                    <Stack>
                        <p>{uitspraak}</p>
                        <h5>{naam}</h5>
                    </Stack>
                </Group>
            </Box>

        </>
    )
}

export default Testimony
