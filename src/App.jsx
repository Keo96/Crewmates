import { useState, useEffect } from 'react'
import React from 'react';
import './App.css'
import { useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { supabase } from './client'
import ReadCrew from './Pages/ReadCrew'
import CreateCrew from './Pages/CreateCrew'
import EditCrew from './Pages/EditCrew'
import Home from './Pages/Home'
import Info from './Pages/Info'

const App = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    
    const fetchCards = async () => {
      const {data} = await supabase
      .from('Crewmates')
      .select()
      .order('created_at', { ascending: true })

      setCards(data)

    }

    fetchCards()

  }, []);

  let element = useRoutes([
    {
      path:"/",
      element:<Home/>
    },
    {
      path: "/gallery",
      element:<ReadCrew data={cards}/>
    },
    {
      path:"/edit/:id",
      element: <EditCrew data={cards} />
    },
    {
      path:"/create",
      element: <CreateCrew />
    },
    {
      path:"info/:id",
      element: <Info data = {cards}/>
    }
  ]);
  return (

    <div className="App">

      <div className="header">
        <Link to="/"><button className = "header-button">Home</button></Link>
        <Link to="/gallery"><button className="header-button"> Gallery </button></Link>
        <Link to="/create"><button className="header-button"> Create </button></Link>
      </div>
        {element}
    </div>
  )
}

export default App;
