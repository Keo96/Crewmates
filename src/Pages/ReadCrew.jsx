import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';
import './ReadCrew.css'
import { supabase } from '../client';

const ReadCrew = (props) => {
    const [crew, setCrews] = useState([]);

    useEffect(() => {
        const fetchCrews = async () => {
            const {data} = await supabase
                .from('Crewmates')
                .select()
                .order('created_at', {ascending: true})
            setCrews(data);
        }
        fetchCrews();
    }, [props]);

    return (
        <div>
            <h1 style={{textAlign:"center"}}>Your Crewmate Gallery!</h1>
            <div className="readCrews">
                {
                    crew && crew.length > 0 ?
                    crew.map((crew,index) => (
                            <Card id={crew.id} name={crew.name} speed={crew.speed} color={crew.color} />
                        ))
                    : <h2>{'No Crewmates Yet 😞'}</h2>
                }
            </div>  
        </div>
    )
}

export default ReadCrew;