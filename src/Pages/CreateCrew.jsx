import React, { useState } from 'react';
import { supabase } from '../client.jsx';
import "./CreateCrew.css";
import pic from "/Images/amongus2.png";

const CreateCrew = () => {
    const [card, setCard] = useState({name: "", speed: 0, color: ""})

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCard( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const createCrewmate = async (event) => {
        event.preventDefault();

        await supabase
            .from('Crewmates')
            .insert({name: card.name, speed: card.speed, color: card.color})
            .select()

        window.location = "/create";

    }

    return(
        <div>
            <h1>Create a New Crewmate</h1>
            <img className = "pic2" src={pic}></img>
            <form>
                <label for ="name">Name</label> <br />
                <input type="text" id="name" name="name" value ={card.name} onChange={handleChange}/><br />
                <br/>

                <label for="speed">Speed</label><br />
                <input type="number" id="speed" name="speed" value ={card.speed} onChange={handleChange}/><br />
                <br/>

                <label for="color">Color &nbsp;</label>
                <select className= "color-selection" id="color" name="color" value={card.color} onChange={handleChange}>
                    <option value = "Red">Red</option>
                    <option value = "Blue">Blue</option>
                    <option value = "Green">Green</option>
                    <option value = "Pink">Pink</option>
                    <option value = "Orange">Orange</option>
                    <option value = "Yellow">Yellow</option>
                    <option value = "Black">Black</option>
                    <option value = "White">White</option>
                    <option value = "Purple">Purple</option>
                    <option value = "Brown">Brown</option>
                </select><br/><br/>

                <input type="submit" value="Create Crewmate" onClick={createCrewmate} />
            </form>
        </div>
    )
}

export default CreateCrew