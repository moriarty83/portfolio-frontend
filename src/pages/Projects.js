import Button from "../componenets/Button";
import Slide from "../componenets/Slide";
import Thumbnail from "../componenets/Thumbnail";

import { useState, useEffect } from "react";

function Projects(props){
    const [projects, setProjects] = useState(null);

    const getProjectData = async()=>{
        const response = await fetch(props.URL + "projects");
        if(response.ok){
            const data = await response.json()
            setProjects(data)
        }
        else{
            console.log("Error loading projects");
            setProjects(null);
        }
    }

    useEffect(() => getProjectData(), []);

    const loaded = () =>{
        const projectsElements = projects.map((project, index) =>{
            return(
                <Slide key={index}>
                    <h3>{project.name}</h3>
                    <Thumbnail src={project.image} />
                    <div>
                        <a href={project.git}>
                        <Button primary>Github</Button>
                        </a>
                        <a href="{project.live">
                            <Button>Live Site</Button>
                        </a>
                    </div>
                </Slide>
            )}
        )

        return (
            <div className="flex row space-around width-90" >
                {projectsElements}
            </div>
        )
    }
    return(
        projects ? loaded() : <h1>Loading ...</h1>
    )
}

export default Projects;