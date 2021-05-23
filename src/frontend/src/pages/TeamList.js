import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './HomePage.scss';
import { TeamTile } from '../components/TeamTile';


export const TeamList = () => {

    const [teams, setTeams] = useState([]);
    useEffect(
        () => {
         const fetchAllTeams = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team`);
            const data = await response.json();
            setTeams(data);

         };
         fetchAllTeams();
            


        }, []
    );

    return (
        <div className="HomePage">
        <h1 className="app-name">Java Brains IPL Dashboard</h1>
  

        <Link to="/teams" replace>Let's Get Started </Link>

        </div>
        
    );
}