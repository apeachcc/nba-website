import React, { useState, useEffect } from 'react';
import { Card, CardImg, CardTitle, CardSubtitle, CardBody } from 'reactstrap';

const Teams = () => {
  const [teams, setTeams] = useState([]);

  const fetchTeamData = async () => {
    try {
      const response = await fetch('https://www.balldontlie.io/api/v1/teams');
      const data = await response.json();
      setTeams(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTeamData();
  }, []);

  return (
    <div className="container">
      <h1 class="display-5 fw-bolder">NBA Teams</h1>
      <br></br>
      <div className="row">
        {teams.map((team) => {
          // Hide the New Orleans Pelicans and Utah Jazz teams
          if (team.full_name === 'New Orleans Pelicans' || team.full_name === 'Utah Jazz') {
            return null;
          }

          return (
            <div className="col-md-4 mb-3" key={team.id}>
              <Card>
                <CardImg 
                  top 
                  width="100%"
                  style={{ width: "70px" }}
                  className='teamcard' 
                  src={`https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/${team.abbreviation}.png&h=200&w=200`}
                  alt={`${team.full_name} logo`} 
                />
                <CardBody>
                  <CardTitle tag="h5">{team.full_name}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">{team.conference}</CardSubtitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">{team.city}</CardSubtitle>
                </CardBody>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Teams;
