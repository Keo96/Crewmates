import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Card.css'
import crewpic from '/Images/crewmatePic.png'
import black from '/Images/black.png'
import red from '/Images/red.png'
import blue from '/Images/blue.png'
import green from '/Images/green.png'
import orange from '/Images/orange.png'
import pink from '/Images/pink.png'
import purple from '/Images/purple.png'
import white from '/Images/white.png'
import yellow from '/Images/yellow.png'
import brown from '/Images/brown.png'

const Card = (props) => {
    const [pic,setPic] = useState(crewpic);
    useEffect(() => {
        const colorToPicMap = {
            Red: red,
            Blue: blue,
            Green: green,
            Pink: pink,
            Orange: orange,
            Yellow: yellow,
            Black: black,
            White: white,
            Purple: purple,
            Brown: brown,
          };
          setPic(colorToPicMap[props.color]);
        }, [props.color]);
    return (
        <div className="Card">
            <Link className='link2'
                to={`/info/${props.id}`}
                key={props.id}
                state={{ pic }}
                >
            <div className = "container">
                <div>
                    <img className = "crewmatePic" src ={pic} alt="Crewmate"></img>
                </div>
                <div>
                    <h3 className="name">Name of Crewmate: {props.name}</h3>
                    <h3 className="speed">Speed of Crewmate: {props.speed}</h3>
                    <h3 className="color">Color of Crewmate: {props.color}</h3>
                </div>
            </div>
            <Link className = "link" to={`/edit/${props.id}`}>Edit Crewmate</Link>
            </Link>
        </div>
    );
};

export default Card;