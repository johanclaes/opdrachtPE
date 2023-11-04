import {FunctionComponent} from 'react'
import {Container, Title, Accordion, Flex} from '@mantine/core'
import './Koken.css';
import KokenFotos from './KokenFotos.tsx'



const chileconcarne =
    'Snipper de uien en de knoflook. Snij de paprika in blokjes.\n' +
    'Bak het gehakt rul in 2 el olijfolie. Voeg er na 10 minuten de ui en knoflook, de paprikablokjes en de tomatenblokjes. Kruid met wat zout, komijn, korianderpoeder, 1 mespunt kaneel en 1 mespunt of meer chilipoeder.\n' +
    'Voeg 3 dl water toe, breng aan de kook en laat 2 uur zachtjes sudderen.\n' +
    'Laat de bonen uitlekken en doe ze bij de saus. Laat nog 10 minuten op een zacht vuurtje doorwarmen. Breng op smaak met peper en zout.';

const applecrumble =
    'Verwarm de oven voor op 180°C.\n' +
    'Meng de bloem met de kristalsuiker in een grote kom. Werk de boter erdoor tot je kruimelachtige stukjes hebt. Vet een ovenschotel in met boter. Schik de schijfjes appel erin en besprenkel met de bruine suiker. Voeg er nog een klontje boter aan toe en dek af met het deeg.\n' +
    'Bak ca. 45 min. in de oven of tot het deeg een bruin tintje krijgt.';

const focaccia =
    ' Laat de tomaten en olijven goed uitlekken en hak ze fijn. Rist de tijmblaadjes van de takjes.\n' +
    'Los de gist op in 250 ml lauw water. Meng in een kom de bloem met het zout. Maak in het midden een kuiltje en giet er de opgeloste gist en de olijfolie in. Kneed tot een glad deeg. Voeg een beetje lauw water toe als het deeg te droog is, of wat bloem als het te nat is.\n' +
    'Kneed het deeg 10 minuten krachtig op een met bloem bestoven werkvlak. Doe het weer in de kom en laat het afgedekt 1 uur rijzen op een warme plaats.';

interface KokenProps {

}

const Koken: FunctionComponent<KokenProps> = () => {
    return (
        <>
            <h2>Koken</h2>
            <p>De Corona periode heeft me  het koken gezet. Hello-Fresh heeft me in de beginfase veel geholpen
            maar gaandeweg begon ik zelf te experimenteren. Nog steeds brengt hello-fresh 3 te bereiden maaltijden per
            week. De zussen hebben ondertussen al recepten gevraagd hoe ik sommige gerechten op smaak krijg. </p>

            <Flex

                gap="md"
                justify="flex-center"
                align="flex-center"
                direction="row"
                wrap="wrap"
            >
                <Container size="md" className="wrapper">
                    <Title ta="center" className="title">
                        Specialiteiten van het huis
                    </Title>
                    <Accordion variant="separated">
                        <Accordion.Item className="item" value="reset-password">
                            <Accordion.Control>Chile Con Carne</Accordion.Control>
                            <Accordion.Panel>{chileconcarne}</Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item className="item" value="another-account">
                            <Accordion.Control>Applecrumble</Accordion.Control>
                            <Accordion.Panel>{applecrumble}</Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item className="item" value="newsletter">
                            <Accordion.Control>Focaccia</Accordion.Control>
                            <Accordion.Panel>{focaccia}</Accordion.Panel>
                        </Accordion.Item>
                    </Accordion>
                    <br/>
                </Container>

                <div className="maximumBreedte">
                    <KokenFotos/>
                </div>



            </Flex>






        </>
    )
}

export default Koken
