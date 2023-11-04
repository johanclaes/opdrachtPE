import {FunctionComponent} from 'react'
import TaalProgressieBalk from './TaalProgressieBalk.tsx'


interface TaalProgressieProps {
        taal: string
        procent : number
        commentaar: string
}

const TaalProgressie: FunctionComponent<TaalProgressieProps> = (
    {taal, procent, commentaar}) =>
{
    return (
        <>
            <p className="vetgedrukt">{taal}</p>
            <TaalProgressieBalk procent={procent}/>
            <p>{commentaar}</p>
        </>
    )
}

export default TaalProgressie
