import Circle from "../componenets/Circle";
import { Link } from "react-router-dom";


function Home(props){
    return(
        <div className="flex align-center column margin-auto width-90">
            <a href="/"><Circle className="saturn" peach>Home</Circle></a>
            <a href="/about"><Circle className="mars" red>About</Circle></a>
            <a href="/projects"><Circle className="venus" gray>Projects</Circle></a>
            <a href="http://www.google.com/"><Circle className="earth" tan>Leave</Circle></a>
        </div>

    )
}

export default Home;