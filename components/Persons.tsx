import { FC } from "react"
import Person, { PesrsonProps } from "./Person";

const mockPersonList:PesrsonProps[] = [
    {
        name: "Leila",
        age: 22,
        gender: "Female"
    },

    {
        name: "Luis",
        age: 22,
        gender: "Male"
    },

    {
        name: "Kasy",
        age: 22,
        gender: "Female"
    },

    // {
    //     name: "Jay",
    //     age: 15,
    //     gender: "Male"
    // }


]

const Persons: FC = () => {

const displayPersons = () => {
    return mockPersonList.map(
        person => <Person person={person}/>
    )
}

    return(
        
        <div style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            backgroundColor: "yellow",
        }}>
            <h1>Persons</h1>
            <div style={{
                display: "flex",
                flexDirection: "row", 
                flexWrap: "wrap"
            }}>

                {displayPersons()}

                {/* <Person person={{
                    name: "Leila",
                    age: 22,
                    gender: "Female"
                }}/>
                <Person person={{
                    name: "Luis",
                    age: 22,
                    gender: "Male"
                }}/>
                <Person person={{
                    name: "Kasy",
                    age: 22,
                    gender: "Female"
                }}/> */}
            </div>
        </div>
    )
}

export default Persons