import {FunctionComponent, useState} from 'react'
import {Button} from 'react-bootstrap'

import ccie from '../images/ccie20.jpg'
import specialist from '../images/specialist.jpg'
import devops from '../images/devops.png'

interface CertificatenProps {

}

const Certificaten: FunctionComponent<CertificatenProps> = () => {
    const [teller, setTeller] = useState(1)


    if (teller == 1)
        return(
            <>
                <img alt="specialist" src={specialist} className="img-fluid" />
                <br/>
                <Button variant="secondary"
                        onClick={()=> setTeller((teller) => teller + 1)} >Next Certificate</Button>{' '}
            </>)

    if (teller == 2)
        return(
            <>
                <img alt="devops" src={devops} className="img-fluid" />
                <br/>
                <Button variant="secondary"
                        onClick={()=> setTeller((teller) => teller + 1)} >Next Certificate</Button>{' '}
            </>)

    return (
        <>
            <img alt="foto-johan" src={ccie} className="img-fluid" />
            <br/><br/>

            <Button variant="secondary"
                    onClick={()=> setTeller((teller) => teller + 1)} >Next Certificate</Button>{' '}

        </>)
}

export default Certificaten
