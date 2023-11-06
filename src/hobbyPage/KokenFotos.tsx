import {FunctionComponent} from 'react'
import { Carousel } from '@mantine/carousel';
import fotoFocaccia from '/Focaccia.jpg'
import fotoappelcrumble from '/appelcrumble.jpg'
import fotochiliconcarne from '/chili_con_carne.jpg'

interface KokenFotosProps {

}

const KokenFotos: FunctionComponent<KokenFotosProps> = () => {
    return (
        <>
            <Carousel withIndicators
                      height={250}
                      slideSize="100%"
                      slideGap="md"
                      loop
                      align="start"
                      slidesToScroll={1}>
                <Carousel.Slide><img alt="foto-chili" src={fotochiliconcarne} className="img-fluid" /></Carousel.Slide>
                <Carousel.Slide><img alt="foto-appel" src={fotoappelcrumble} className="img-fluid" /></Carousel.Slide>
                <Carousel.Slide><img alt="foto-focaccia" src={fotoFocaccia} className="img-fluid" /></Carousel.Slide>
            </Carousel>
        </>
    )
}

export default KokenFotos
