import Link from "next/link";
import { FC } from "react";

interface NavLinksProps{
    destination: string,
    text: string
}

const Navlinks: FC<NavLinksProps> =(props) =>{
    return(
        <div id="section">
            <Link href={props.destination}
             style={{
                    padding: "0.75rem 1rem",
                    margin: "1rem 0.25rem"
                }}>
                    {props.text}
            </Link>


        </div>
    )
}

export default Navlinks;