import {useContext, FunctionComponent} from 'react'
import userContext5 from './Testing.tsx'

interface Testing2Props {

}

const Testing2: FunctionComponent<Testing2Props> = () => {

    const user = useContext(userContext5);

    return (
        <>
            <userContext5.Provider value="abc">
                <h4>{`nogmaals ${user}`}</h4>
            </userContext5.Provider>


        </>
    )
}

export default Testing2
