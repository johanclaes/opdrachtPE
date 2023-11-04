import {FunctionComponent} from 'react'
import { Carousel } from '@mantine/carousel';
import fotoFocaccia from '../../public/Focaccia.jpg'
import fotoappelcrumble from '../../public/appelcrumble.jpg'
import fotochiliconcarne from '../../public/chili_con_carne.jpg'

interface KokenFotosProps {

}

const KokenFotos: FunctionComponent<KokenFotosProps> = () => {
    return (
        <>
            <Carousel withIndicators height={200}>
                <Carousel.Slide><img alt="foto-johan" src={fotochiliconcarne} className="img-fluid" /></Carousel.Slide>
                <Carousel.Slide><img alt="foto-johan" src={fotoappelcrumble} className="img-fluid" /></Carousel.Slide>
                <Carousel.Slide><img alt="foto-johan" src={fotoFocaccia} className="img-fluid" /></Carousel.Slide>
            </Carousel>
        </>
    )
}

export default KokenFotos
