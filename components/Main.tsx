import { FC, useState } from "react";


//Prop interface goes here

const Main: FC =() =>{

//Add +1 button
//Add -1 button
//Add another state starting value string 100
//Create 3 buttons that each effect the second state different 
//Add text field and button to change the couter to the value i the field 

    const [getCounter, setCounter] = useState<number>(0)

    const [startingValue, setValue] = useState<number>(100)

    const [getTotal, setTotal ] = useState()

    return (
        <div>
            <h1>Main</h1>
            <p>Counter: {getCounter}</p>
            <button onClick={()=>{
                setCounter(getCounter + 1)
            }}>Increase By 1</button>

            <button onClick={()=>{
                 setCounter(getCounter -1)
            }}>Decrease By 1</button>

            <p>Start Value: {startingValue}</p>

        </div>
    )
}

export default Main 