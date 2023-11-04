import {FunctionComponent} from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

interface TaalProgressieBalkProps {
    procent: number
}

const TaalProgressieBalk: FunctionComponent<TaalProgressieBalkProps> = ({procent}) => {

    // eslint-disable-next-line no-constant-condition
    if (procent < 36)
        return(
    <>
        <ProgressBar variant="warning" now={procent} />
    </>)

    if (procent < 65)
        return(
    <>
        <ProgressBar variant="warning" now={procent} />
    </>)

    if (procent < 80)
        return(
    <>
        <ProgressBar variant="info" now={procent} />
    </>)


    return (
        <>
            <ProgressBar variant="success" now={procent} />
        </>
    )
}

export default TaalProgressieBalk
