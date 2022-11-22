import { FC, useState } from "react";


//Prop interface goes here

const Main: FC =() =>{
    const [getCounter, setCounter] = useState<number>(0)
//Add -1 button
//Add another state starting value string 100
//Create 3 buttons that each effect the second state different 
//Add text field and button to change the couter to the value i the field 
    return (
        <div>
            <h1>Main</h1>
            <p>Counter: {getCounter}</p>
            <button onClick={()=>{
                setCounter(getCounter + 1)
            }}>Click Me</button>
        </div>
    )
}

export default Main 