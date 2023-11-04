import {FunctionComponent} from 'react'
import { useState, createContext, useContext } from "react";
import Testing2 from './Testing2.tsx'

const UserContext5 = createContext("CLAEs");


interface TestingProps {

}

const Testing: FunctionComponent<TestingProps> = () => {
    const [user1, setUser1] =useState("JOhan")

    return (
        <>
            <UserContext5.Provider value={user1}>
                <h3>{`Goededag ${user1}`}</h3>
                <Testing2/>
                <button/>
            </UserContext5.Provider>
        </>
    )
}


export default  UserContext5
