import { Link } from "react-router-dom";

function Header(props){
    const myTan = "#D8C3A5"
    const headerStyle={

        backgroundColor: myTan,
        boxShadow: "0px 2px 4px black"
    }
    const navStyle= {
        display: "flex",
        justifyContent: "space-around",
        broder: "3px solid black",
        padding: "8px",
        width: "100%",
        margin: "auto", 
    }

    return(

        <header style={headerStyle}>
            <h1>My Portfolio Page</h1>
            <nav style={navStyle}>
                <Link to="/">
                    <div>HOME</div>
                </Link>
                <Link to="/about">
                    <div>ABOUT</div>
                </Link>
                <Link to="/projects">
                    <div>PROJECTS</div>
                </Link>
            </nav>
        </header>

    )
}

export default Header;