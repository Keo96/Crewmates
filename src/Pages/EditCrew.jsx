import React, {useState, useEffect} from 'react';
import { supabase } from '../client.jsx';
import { useParams } from 'react-router-dom';

const EditCrew = ({data}) => {
    const {id} = useParams();
    const [crew, setCrew] = useState({id: null, name: "", speed: 0, color: ""});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCrew( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const updateCrew = async (event) => {
        event.preventDefault();
        await supabase
            .from('Crewmates')
            .update({ name: crew.name, speed: crew.speed,  color: crew.color})
            .eq('id', id);

        window.location = "/";
    }

    const deleteCrew = async (event) => {
        event.preventDefault();
    
        await supabase
        .from('Crewmates')
        .delete()
        .eq('id', id); 
    
        window.location = "http://localhost:5173/";
    }

    return(
        <div>
            <form>
                <label for="name">Name</label> <br />
                <input type="text" id="name" name="name" value={crew.name} onChange={handleChange}/><br />
                <br/>

                <label for="speed">Speed</label><br />
                <input type="number" id="speed" name="speed" value={crew.speed} onChange={handleChange}/><br />
                <br/>

                <label for="color">Color</label><br />
                <select id="color" name="color" value={crew.color} onChange={handleChange}>
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
                
                <input type="submit" value="Update Crewmate" onClick={updateCrew}/>
                <button type ="button" className="deleteButton" onClick={deleteCrew}>Delete Crewmate</button>
            </form>
        </div>
    )
}

export default EditCrew;