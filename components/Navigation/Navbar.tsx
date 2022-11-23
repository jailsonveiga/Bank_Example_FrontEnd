import { FC, Fragment } from "react";
import Navlinks from "./Navlinks";

const Navbar: FC =() =>{
    return(

        <Fragment>

        <div id="containerDiv" style={{
            backgroundColor: "white",
            boxShadow: "0 1px 2px 0 green",
            display: "flex",
            flexDirection: "row",
            width: "100%",
            position: "fixed",
            zIndex: "9999",
            top: 0,
            left: 0,
            height: "75px"

        }}>

    {/* Spacing Div */}
        <div id="spacingDiv" style={{
             display: "flex",
             flexDirection: "row",
             margin: "0 6rem",
             justifyContent: "space-between",
             width: "100%"
        }}>

    {/* Logo Div */}
        <div id="logoDiv" style={{
            margin: "0 1rem",
            cursor: "pointer",
            justifyContent: "center"
        }}
        onClick={() => alert("goHome")}
        >
            <h1 style={{
                fontWeight: "bold"
            }}>
                Dev<span style={{
                    color: "green"
                }}>Bank</span>
            </h1>
        </div>

        <div id="linksDiv" style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
        }}>
             <Navlinks destination={"/"} text={"Home"}/>
             <Navlinks destination={"/signup"} text={"Sign Up"}/>
        </div>

        </div>
        </div>

        <div id="bufferDiv" style={{
            height: "75px",
        }}/>

    </Fragment>
    )
}

export default Navbar;