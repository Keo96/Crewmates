import React from "react";
import pic1 from "/Images/AmongUs1.jpeg"
import "./Home.css"
const Home = () => {
    return (
        <div className = "home-container">
            <h1>Welcome to the Crewmate Creator!</h1>

            <h4>Here is where you can create your very own set of crewmates before sending them off into space!</h4>
            <img src={pic1}></img>
        </div>
    )
}

export default Home;