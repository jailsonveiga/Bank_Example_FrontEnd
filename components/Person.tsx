import { FC } from "react";

export interface PesrsonProps {
    name: string,
    age: number,
    gender: "Male" | "Female" | "Nonbinary"
}

const mockPerson: PesrsonProps = {
    name: "Jay",
    age: 15,
    gender: "Male"
}

const Person: FC<{person:PesrsonProps}> = (props) => {
    return(

        <div style={{
            border: "1px solid pink",
            margin: "1em",
            padding: "1.5em",
            minWidth: "300px",
            maxWidth: "500px"
        }}>
            <h1>{props.person.name}</h1>
            <p>{props.person.age}</p>
            <p>{props.person.gender}</p>
        </div>
    )
}

export default Person