import { React ,useEffect} from 'react';

import { MatchDetailCard } from '../components/MatchDetaikCard';
import { MatchSmallCard } from '../components/MatchSmallCard';


export const TeamPage= () => {
  return (
    <div className="TeamPage">
        <MatchDetailCard/>
        <MatchSmallCard/>
        <MatchSmallCard/>
        <MatchSmallCard/>        
    </div>
  );
}

//export default TeamPage;
