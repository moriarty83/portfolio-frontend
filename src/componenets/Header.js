import { Link } from "react-router-dom";

function Header(props){
    const myTan = "#D8C3A5"
    const headerStyle={
        zIndex: "1",
        paddingTop: "30px",
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
            <h1 className="margin-0">My Portfolio Page</h1>
            <nav style={navStyle}>
                <Link to="/">
                    <h3>HOME</h3>
                </Link>
                <Link to="/about">
                    <h3>ABOUT</h3>
                </Link>
                <Link to="/projects">
                    <h3>PROJECTS</h3>
                </Link>
            </nav>
        </header>

    )
}

export default Header;