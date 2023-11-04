import {FunctionComponent} from 'react'
import { Tabs, Box } from '@mantine/core';

const wanUitleg = "Aanvankelijk hield ik me bij proximus vooral bezig met configuratie van cisco routers, " +
    "zowel voor customer edge als backbone. De cisco2503 heeft echt geen geheimen meer voor mij. Graag zou ik nog " +
    "benadrukken dat we ALLES zelf deden, half belgie rondrijden bij klanten en in ruimtes van RTT, configuratie," +
    "kabels trekken, management station opzetten, nalezen van offertes voor klanten, ... ";

const LANUitleg = "Gaandeweg werden er ook lan-switches en security producten toegevoegd" +
    "aan het cisco Gamma. Hiervoor werd er training gevolgd en vervolgens werd dit ook aangeboden aan de klant" +
    "als managed service. Tevens werden er in 1997 reeds 3 racks vrijgemaakt in zalen van proximus om servers van " +
    "klanten te zetten, dit was housing version 1.";

const IPtelUitleg = "Cisco heeft de firma Celsius overgekocht en die hadden een basic vorm" +
    "van IPtel, dus 1 IPtel server die vele ethernet-telefoons beheerde. Na de revision door cisco besloot belgacom" +
    "dit product ook aan te bieden. Hiervoor werden er engineers gezocht en ik ben in dit verhaal gestapt. In begin " +
    "dit bellen en gebeld worden, nadien ook voicemail, chatten, presence, contactcenters, video-oplossingen, .. ";

interface DifferentTechnologyProps {

}

const DifferentTechnology: FunctionComponent<DifferentTechnologyProps> = () => {


    return (
        <>
            <Box bg="darkgrey" my="xl"  p="2px" m="20px">
                <h5>Diverse Technologien</h5>
                <Tabs defaultValue="messages" variant="pills">
                    <Tabs.List>
                        <Tabs.Tab value="messages" color="green">
                            WAN
                        </Tabs.Tab>
                        <Tabs.Tab value="messages2" color="yellow">
                            LAN_security
                        </Tabs.Tab>
                        <Tabs.Tab value="messages3" color="blue">
                            IP_Telephony
                        </Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="messages">
                        {wanUitleg}
                    </Tabs.Panel>
                    <Tabs.Panel value="messages2">
                        {LANUitleg}
                    </Tabs.Panel>
                    <Tabs.Panel value="messages3">
                        {IPtelUitleg}
                    </Tabs.Panel>

                </Tabs>
            </Box>
        </>
    )
}

export default DifferentTechnology
