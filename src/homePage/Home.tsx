import {FunctionComponent} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MenuBlok from './MenuBlok.tsx'
import fotoJohan from '/johan2.jpg'
import Certificaten from './Certificaten.tsx'
import TaalProgressie from './TaalProgressie.tsx'

import { useContext} from 'react'
import AchtergrondContext from '../routing/AchtergrondContext.tsx'
interface HomeProps {

}

const Home: FunctionComponent<HomeProps> = () => {

    const achtergrond = useContext(AchtergrondContext)
    return (
        <>
            <br/><br/>
            <Container fluid="md" style={{backgroundColor: achtergrond.activeKleur}}>
                <Row>
                    <Col><MenuBlok titel={"Opleidingen"}
                                   beschrijving={"Dit is een overzicht van mijn schoolse opleidingen. Opleidingen die ik ooit voor proximus moest of mocht volgen, zouden ons te ver leiden."}
                                   item1={"2021 - nu : Graduaat programmeren: Thomas More in Geel"}
                                   item2={"1993 - 1994: Bedrijfs-economie: KU in Leuven"}
                                   item3={"1989 - 1993: ind. ing. electronica telecom : HIK in Geel"}
                                   item4={"1983 - 1989: ASO Wiskunde: OLV Visitatie in Leopoldsburg"}/></Col>
                    <Col>
                        <h3>Johan Claes</h3>
                        <img alt="foto-johan" src={fotoJohan} className="img-fluid" />
                    </Col>
                    <Col><MenuBlok titel={"Certificaten"}
                                   beschrijving={"Door de jaren heb ik deels uit eigen interesse, deels onder druk van mijn werkgever meerdere certificaten behaald."}
                                   item1={"CCIE #5437 routing & switching in 1999 en nog steeds actief"}
                                   item2={"CCVP in 2011"}
                                   item3={"UCCx design/implementation in 2013"}
                                   item4={"DevOps Agile Way of working in 2020"}/></Col>
                </Row>
                <hr/>
                <Row>
                    <Col><MenuBlok titel={"Varia"}
                                   beschrijving={"Dit is niet een wistjedat rubriek over mezelf, enkel relevante informatie."}
                                   item1={"burgelijke status: ongehuwd"}
                                   item2={"rijbewijs B"}
                                   item3={"geboortedatum 17/08/1971"}
                                   item4={"brevet radio-amateur"}/></Col>
                    <Col> <Certificaten/> </Col>
                </Row>
                <hr/>
                <Row>
                    <TaalProgressie taal={"nederlands"} procent={100} commentaar={"moedertaal"}/>
                    <TaalProgressie taal={"frans"} procent={75} commentaar={"lire et ecrire en ordre"}/>
                    <TaalProgressie taal={"engels"} procent={70} commentaar={"technical english ok"}/>
                    <TaalProgressie taal={"spaans"} procent={35} commentaar={"hola que tal ?"}/>
                </Row>
            </Container>
            <hr/>
        </>
    )
}

export default Home
