import {FunctionComponent } from 'react'
import Testimony from './Testimony.tsx'
import logoBpostBank from '../images/bpostbank.png'
import logoPetronas from '../images/petronas.png'
import logoCallebaut from '../images/callebaut.png'
import {Box, Stack} from '@mantine/core'



interface TestimonialsProps {}

const Testimonials: FunctionComponent<TestimonialsProps> = () => {

    return (
        <>



            <Box bg="darkgrey" my="xl"  p="2px" m="20px">

                    <Stack>
                        <h3>Testimonials</h3>
                        <Testimony logo={logoPetronas} naam={"Anna Kozleda"} uitspraak={"All contact-center agents followed the training so they could start on monday with the new way of working."} />
                        <Testimony logo={logoBpostBank} naam={"Alfredo Sardo"} uitspraak={"Proximus a fait une bonne migration pendant le weekend, pas de soucis le lundi, merci."} />
                        <Testimony logo={logoCallebaut} naam={"Jo Caudron"} uitspraak={"Gelukkig heeft Johan de callmanager cluster in USA in orde kunnen zetten, ook al was dit niet onze verantwoordelijkheid."} />

                    </Stack>

            </Box>




        </>
    )
}

export default Testimonials
