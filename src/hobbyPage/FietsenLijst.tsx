import {FunctionComponent} from 'react'
import { DataTable } from 'mantine-datatable';
import {Group} from '@mantine/core'

interface FietsenLijstProps {

}

const records1 = [
    { id: 301, merk: 'Specialized', type: 'MTB', kleur: 'Zwart' , prijs: 480 , onderhoudDone : false, maat : 'M' },
    { id: 302, merk: 'Norta', type: 'stadsfies', kleur: 'Zwart' , prijs: 600 , onderhoudDone : true, maat : 'M' },
    { id: 303, merk: 'Koga', type: 'worldtraveller', kleur: 'Zwart' , prijs: 4800 , onderhoudDone : true, maat : 'L' },
    { id: 304, merk: 'Thomson', type: 'koersfiets', kleur: 'Wit' , prijs: 1100 , onderhoudDone : true, maat : 'M' },
    { id: 305, merk: 'Specialized', type: 'MTB', kleur: 'Zwart' , prijs: 2300 , onderhoudDone : true, maat : 'L' },
    { id: 306, merk: 'Specialized', type: 'koersfiets', kleur: 'Zwart' , prijs: 2200 , onderhoudDone : true, maat : 'L' },
    { id: 307, merk: 'Specialized', type: 'MTB', kleur: 'Rood' , prijs: 2100 , onderhoudDone : false, maat : 'L' },
]

const FietsenLijst: FunctionComponent<FietsenLijstProps> = () => {
    return (
        <>

            <DataTable

                columns={[
                    { accessor: 'id' ,title: '#', textAlignment: 'right' },
                    { accessor: 'merk',
                        title: 'Fiets-Merk',
                        footer :  (
                            <Group >
                                <p>{records1.length} fietsen</p>
                            </Group>
                        ),
                    },
                    { accessor: 'type',
                        title: 'Fiets-Type',
                        // color : primary,
                    },
                    { accessor: 'kleur', width: 150},
                    { accessor: 'maat',
                        title: 'FietsMaat',
                    },

                ]}
                records={records1}
                fontSize="15px"
                onRowClick={({merk, prijs}) => alert(`${merk} voor de prijs ${prijs}€ !`)}
            />
        </>
    )
}

export default FietsenLijst
