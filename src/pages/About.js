import { useState, useEffect } from "react";
import Slide from "../componenets/Slide";
import Container from "../componenets/Container";


function About(props){
    const [about, setAbout] = useState(null);

    const getAboutData = async () =>{
        const response = await fetch(props.URL + "about");
        if(response.ok){
            const data = await response.json();
            setAbout(data);
        }
        else{
            console.log("Request failed")
            setAbout(null);
        }
        
    }

    useEffect(()=> getAboutData(), []);

    const loaded = ()=>{
        return(
        <div className="flex row space-around">
            <Container>
            <img src={about.headshot} alt="Chris" />
            </Container>
            <Container>
            <h2>{about.name}</h2>
            <h3>{about.email}</h3>
            
            <p>{about.bio}</p>
            </Container>
        </div>)
    }

    return(
        about ? loaded() : <h1>Loading...</h1>
    )
}

export default About;